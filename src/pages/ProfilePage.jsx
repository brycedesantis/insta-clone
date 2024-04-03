import { Link, useParams } from "react-router-dom";
import ProfileHeader from "../components/ProfilePage/ProfileHeader";
import ProfilePosts from "../components/ProfilePage/ProfilePosts";
import ProfileTabs from "../components/ProfilePage/ProfileTabs";
import useGetUserProfileByUsername from "../hooks/useGetUserProfileByUsername";

export default function ProfilePage() {
	const { username } = useParams();
	const { isLoading, userProfile } = useGetUserProfileByUsername(username);
	const userNotFound = !isLoading && !userProfile;

	if (userNotFound) return <UserNotFound />;

	return (
		<div className="max-w-5xl w-full pt-8 px-5 mx-auto">
			<div className="w-full flex justify-start py-7">
				{!isLoading && userProfile && <ProfileHeader />}
			</div>
			<div className="w-full border-t">
				<ProfileTabs />
			</div>
			<div className="w-full">
				<ProfilePosts />
			</div>
		</div>
	);
}

function UserNotFound() {
	return (
		<div className="w-full flex flex-col items-center justify-center mt-12">
			<div className="py-8">Sorry, this page isn't available.</div>
			<div>
				The account may not exist or has been entered incorrectly.{" "}
				<span>
					<Link to={"/"} className="text-sky-500 p-2 hover:text-sky-700">
						Go back to Instagram.
					</Link>
				</span>
			</div>
		</div>
	);
}
