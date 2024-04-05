import { BsTrash } from "react-icons/bs";
import Comment from "../Comments/Comment";
import Postfooter from "../FeedComponents/Postfooter";
import { useState } from "react";
import { deleteObject, ref } from "firebase/storage";
import { firestore, storage } from "../../firebase/firebase";
import { arrayRemove, deleteDoc, doc, updateDoc } from "firebase/firestore";
import usePostStore from "../../store/postStore";
import useUserProfileStore from "../../store/userProfileStore";
import Caption from "../Comments/Caption";
import { toast } from "react-hot-toast";

export default function ProfileModal({
	isOpen,
	onClose,
	post,
	userProfile,
	loginUser,
}) {
	const [isDeleting, setIsDeleting] = useState(false);
	const deletePost = usePostStore((state) => state.deletePost);
	const lowerPostCount = useUserProfileStore((state) => state.deletePost);

	if (!isOpen) return null;

	const handleClose = (e) => {
		if (e.target.id === "wrapper") onClose();
	};
	console.log;

	const handleDeletePost = async () => {
		if (!window.confirm("Are you sure you want to delete this post?")) return;
		if (isDeleting) return;

		try {
			const imageRef = ref(storage, `posts/${post.id}`);
			await deleteObject(imageRef);
			const userRef = doc(firestore, "users", loginUser.userId);
			await deleteDoc(doc(firestore, "posts", post.id));
			await updateDoc(userRef, {
				posts: arrayRemove(post.id),
			});

			deletePost(post.id);
			lowerPostCount(post.id);
			toast.success("Post successfully deleted");
		} catch (error) {
			toast.error(error);
		} finally {
			setIsDeleting(false);
		}
	};

	return (
		<div
			id="wrapper"
			onClick={handleClose}
			className="w-full fixed inset-0 bg-black bg-opacity-20 z-50 flex justify-center items-center"
		>
			<div className="md:max-w-6xl max-w-4xl mx-auto flex flex-col pb-6">
				<button
					onClick={() => onClose()}
					className="text-white text-xl place-self-end"
				>
					X
				</button>

				<div className=" p-2">
					<div className="flex flex-col md:flex-row w-11/12 sm:w-[70%] md:w-full mx-auto">
						<div className="overflow-hidden flex-1">
							<img
								className="size-full aspect-square object-cover"
								src={post.imageURL}
								alt=""
							/>
						</div>

						<div className="flex flex-col w-full md:w-2/6 pt-3 px-4 bg-white">
							<div className="flex justify-between items-center py-2">
								<div className="flex items-center gap-3">
									<img
										className="size-9 rounded-full object-cover"
										src={userProfile.profilePicture}
										alt=""
									/>
									<h1 className="text-sm font-semibold">
										{userProfile.username}
									</h1>
								</div>
								{loginUser?.userId === userProfile.userId && (
									<BsTrash
										onClick={handleDeletePost}
										className=" cursor-pointer hover:scale-110 hover:fill-red-400"
									/>
								)}
							</div>

							<div className="hidden md:flex max-h-[535px] my-8 flex-col gap-4 items-start overflow-y-auto">
								{/* Caption */}
								{post.caption && <Caption post={post} />}

								{/* Comments */}
								{post.comments.map((comment) => (
									<Comment key={comment.id} comment={comment} />
								))}
							</div>

							<div className="mt-auto">
								<Postfooter post={post} profilePage={true} />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
