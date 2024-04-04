import { Link } from "react-router-dom";
import { timeAgo } from "../../utils/timeAgo";
import useUserProfileStore from "../../store/userProfileStore";

const Caption = ({ post }) => {
	const userProfile = useUserProfileStore((state) => state.userProfile);

	return (
		<>
			<div className="flex items-center gap-3 py-1">
				<Link to={`/${userProfile.username}`}>
					<img
						className="size-9 rounded-full object-cover"
						src={userProfile.profilePicture}
						alt="profile picture"
					/>
				</Link>
				<div className="gap-1">
					<div className="flex gap-1 items-center">
						<Link to={`/${userProfile.username}`}>
							<h1 className="text-sm font-semibold hover:text-gray-400">
								{userProfile.username}
							</h1>
						</Link>
						<p className="text-sm">{post.caption}</p>
					</div>
					<div className="text-gray-400 text-xs">{timeAgo(post.createdAt)}</div>
				</div>
			</div>
		</>
	);
};

export default Caption;
