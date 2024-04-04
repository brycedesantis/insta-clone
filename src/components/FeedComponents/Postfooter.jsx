import { useRef, useState } from "react";
import {
	CommentLogo,
	NotificationsLogo,
	UnlikeLogo,
} from "../../assets/constants";
import usePostComment from "../../hooks/usePostComment";
import { AiOutlineLoading } from "react-icons/ai";
import useLoginStore from "../../store/loginStore";

export default function Postfooter({ post, username, profilePage }) {
	const [likeStatus, setLikeStatus] = useState(false);
	const [likeCount, setLikeCount] = useState(100);
	const { handlePostComment, isCommenting } = usePostComment();
	const [comment, setComment] = useState("");
	const loginUser = useLoginStore((state) => state.user);
	const commentRef = useRef(null);

	function likePost() {
		if (likeStatus) {
			setLikeStatus(false);
			setLikeCount((prev) => prev - 1);
		} else {
			setLikeStatus(true);
			setLikeCount((prev) => prev + 1);
		}
	}

	const handleSubmitComment = async () => {
		await handlePostComment(post.id, comment);
		setComment("");
	};

	return (
		<>
			<div className="flex flex-col gap-2 pt-2 pb-1 border-b">
				<div className="flex justify-between">
					<div className="flex gap-3">
						<button onClick={likePost}>
							{!likeStatus ? <NotificationsLogo /> : <UnlikeLogo />}
						</button>

						<div
							onClick={() => commentRef.current.focus()}
							className="cursor-pointer"
						>
							<CommentLogo />
						</div>
					</div>
				</div>
				<div className="text-sm">{likeCount} likes</div>
				{!profilePage && (
					<>
						<p className="text-xs font-bold cursor-pointer">
							{username}
							<span className="font-normal pl-1 cursor-auto">New headshot</span>
						</p>
						<p className="text-sm text-gray-400 cursor-pointer w-fit">
							View all 56 comments
						</p>
					</>
				)}

				{loginUser && (
					<div className="flex">
						<textarea
							onChange={(e) => setComment(e.target.value)}
							className="w-full outline-none resize-none text-sm"
							name=""
							placeholder="Add a comment..."
							ref={commentRef}
						></textarea>
						<span
							onClick={handleSubmitComment}
							className="cursor-pointer mr-2 text-blue-500 text-sm font-semibold hover:text-black"
						>
							{isCommenting ? (
								<AiOutlineLoading className="animate-spin size-5 my-1" />
							) : (
								"Post"
							)}
						</span>
					</div>
				)}
			</div>
		</>
	);
}
