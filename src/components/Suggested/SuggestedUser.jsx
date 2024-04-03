import useFollowAndUnfollowUser from "../../hooks/useFollowAndUnfollowUser";
import useLoginStore from "../../store/loginStore";

export default function SuggestedUser({ user, inSearch, setUser }) {
	const { isUpdating, isFollowing, handleFollowUser } =
		useFollowAndUnfollowUser(user.userId);

	const loginUser = useLoginStore((state) => state.user);

	const followUser = async () => {
		await handleFollowUser();
		setUser({
			...user,
			followers: isFollowing
				? user.followers.filter(
						(follower) => follower.userId !== loginUser.userId
				  )
				: [...user.followers, loginUser],
		});
	};

	return (
		<div className="py-4 flex justify-between">
			<div className="flex items-center gap-3">
				<img
					className="size-10 rounded-full object-cover"
					src={user.profilePicture}
					alt={`${user.fullName}'s profile picture`}
				/>
				<div className="flex flex-col justify-center align-middle">
					<p className="font-bold">{user.username}</p>
					{inSearch ? (
						<p className="text-gray-400 text-xs">
							{user.followers.length} Followers
						</p>
					) : (
						<p className="text-gray-400 text-xs">Suggested for you</p>
					)}
				</div>
			</div>

			{loginUser.userId !== user.userId && (
				<button
					onClick={followUser}
					className="text-blue-500 text-xs font-semibold hover:text-black"
				>
					{isFollowing ? "Unfollow" : "Follow"}
				</button>
			)}
		</div>
	);
}
