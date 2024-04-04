import { useRef, useState } from "react";
import {
	CommentLogo,
	NotificationsLogo,
	UnlikeLogo,
} from "../../assets/constants";
import usePostComment from "../../hooks/usePostComment";
import { AiOutlineLoading } from "react-icons/ai";
import useLoginStore from "../../store/loginStore";
import useLikePost from "../../hooks/useLikePost";
import { timeAgo } from "../../utils/timeAgo";

export default function Postfooter({ post, profilePage, createdBy }) {
	const { handlePostComment, isCommenting } = usePostComment();
	const [comment, setComment] = useState("");
	const loginUser = useLoginStore((state) => state.user);
	const commentRef = useRef(null);
	const { handleLikePost, isLiked, likes } = useLikePost(post);

	const handleSubmitComment = async () => {
		await handlePostComment(post.id, comment);
		setComment("");
	};

	return (
		<>
			<div className="flex flex-col gap-2 pt-2 pb-1 border-b">
				<div className="flex justify-between">
					<div className="flex gap-3">
						<button onClick={handleLikePost}>
							{!isLiked ? <NotificationsLogo /> : <UnlikeLogo />}
						</button>

						<div
							onClick={() => commentRef.current.focus()}
							className="cursor-pointer"
						>
							<CommentLogo />
						</div>
					</div>
				</div>
				<div className="text-sm">{likes} likes</div>
				{profilePage && (
					<p className="text-xs text-gray-400">
						Posted {timeAgo(post.createdAt)} ago
					</p>
				)}
				{!profilePage && (
					<>
						<p className="text-xs font-bold cursor-pointer">
							{createdBy?.username}
							<span className="font-normal pl-1 cursor-auto">
								{post.caption}
							</span>
						</p>
						{post.comments.length > 0 && (
							<p className="text-sm text-gray-400 cursor-pointer w-fit">
								View all {post.comments.length} comments
							</p>
						)}
					</>
				)}

				{loginUser && (
					<div className="flex">
						<textarea
							value={comment}
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
