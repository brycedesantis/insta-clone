import { useState } from "react";
import {
	CommentLogo,
	NotificationsLogo,
	UnlikeLogo,
} from "../../assets/constants";

export default function Postfooter({ username }) {
	const [likeStatus, setLikeStatus] = useState(false);
	const [likeCount, setLikeCount] = useState(100);

	function likePost() {
		if (likeStatus) {
			setLikeStatus(false);
			setLikeCount((prev) => prev - 1);
		} else {
			setLikeStatus(true);
			setLikeCount((prev) => prev + 1);
		}
	}

	return (
		<>
			<div className="flex flex-col gap-2 pt-2 pb-1 border-b">
				<div className="flex justify-between">
					<div className="flex gap-3">
						<button onClick={likePost}>
							{!likeStatus ? <NotificationsLogo /> : <UnlikeLogo />}
						</button>

						<CommentLogo />
					</div>
				</div>
				<div className="text-sm">{likeCount} likes</div>
				<p className="text-xs font-bold cursor-pointer">
					{username}
					<span className="font-normal pl-1 cursor-auto">New headshot</span>
				</p>
				<p className="text-sm text-gray-400 cursor-pointer w-fit">
					View all 56 comments
				</p>

				<div className="flex">
					<textarea
						className="w-full outline-none resize-none text-sm"
						name=""
						placeholder="Add a comment..."
					></textarea>
					<span className="cursor-pointer mr-2 text-blue-500 text-sm font-semibold hover:text-black">
						Post
					</span>
				</div>
			</div>
		</>
	);
}
