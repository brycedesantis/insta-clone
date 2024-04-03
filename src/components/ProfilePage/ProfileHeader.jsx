import { Link } from "react-router-dom";
import useLoginStore from "../../store/loginStore";
import useUserProfileStore from "../../store/userProfileStore";

export default function ProfileHeader() {
	const { userProfile } = useUserProfileStore();
	const loginUser = useLoginStore((state) => state.user);
	const visitingOwnProfile =
		loginUser && loginUser.username === userProfile.username;
	const visitingAnotherProfile =
		loginUser && loginUser.username !== userProfile.username;

	return (
		<>
			<img
				className="size-32 mr-8 rounded-full object-cover"
				src={`${userProfile.profilePicture}`}
				alt="profile picture"
			/>

			<div className="flex flex-col gap-4 w-full">
				<div className="flex items-center gap-6">
					<h1 className="text-xl">{userProfile.username}</h1>
					{visitingOwnProfile && (
						<Link
							to={"/edit"}
							className="hover:bg-gray-200 py-1 px-5 rounded-lg"
						>
							Edit profile
						</Link>
					)}
					{visitingAnotherProfile && (
						<button className="bg-sky-500 p-2 hover:bg-sky-600 text-white py-1 px-5 rounded-lg">
							Follow
						</button>
					)}
				</div>
				<div className="flex justify-start gap-10">
					<div>
						{" "}
						<span className="font-semibold">
							{userProfile.posts.length}
						</span>{" "}
						posts
					</div>
					<div>
						{" "}
						<span className="font-semibold">
							{userProfile.followers.length}
						</span>{" "}
						followers
					</div>
					<div>
						{" "}
						<span className="font-semibold">
							{userProfile.following.length}
						</span>{" "}
						following
					</div>
				</div>
				<div>
					<h1 className="text-sm font-semibold">{userProfile.fullName}</h1>
					<p className="text-xs">{userProfile.bio}</p>
				</div>
			</div>
		</>
	);
}
