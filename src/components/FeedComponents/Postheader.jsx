import { Link } from "react-router-dom";
import { timeAgo } from "../../utils/timeAgo";
import useFollowAndUnfollowUser from "../../hooks/useFollowAndUnfollowUser";

export default function Postheader({ post, createdBy }) {
	const { handleFollowUser, isFollowing, isUpdating } =
		useFollowAndUnfollowUser(post.createdBy);

	return (
		<>
			<div className="flex justify-between items-center py-3 text-xs mt-2">
				<div className="flex items-center">
					<Link to={`/${createdBy.username}`}>
						<img
							className="size-9 rounded-full ring-2 ring-rose-500 ring-offset-1 object-cover"
							src={createdBy.profilePicture}
							alt={`${createdBy.username}'s profile picture`}
						/>
					</Link>
					<div className="flex items-center gap-1">
						<Link to={`/${createdBy.username}`}>
							<p className="font-bold pl-2">{createdBy.username}</p>
						</Link>
						<p>• {timeAgo(post.createdAt)}</p>
					</div>
				</div>
				<div className="">
					<button
						onClick={handleFollowUser}
						className="text-blue-500 text-sm font-semibold hover:text-black"
					>
						{isFollowing ? "Unfollow" : "Follow"}
					</button>
				</div>
			</div>
		</>
	);
}
