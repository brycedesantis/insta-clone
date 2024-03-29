import ProfileHeader from "../components/ProfilePage/ProfileHeader";
import ProfilePosts from "../components/ProfilePage/ProfilePosts";
import ProfileTabs from "../components/ProfilePage/ProfileTabs";

export default function ProfilePage() {
	return (
		<div className="max-w-4xl w-full pt-8 px-5 border mx-auto">
			<div className="w-full flex justify-start py-7">
				<ProfileHeader />
			</div>
			<div className="w-full flex justify-center border-t">
				<ProfileTabs />
			</div>
			<div className="w-full">
				<ProfilePosts />
			</div>
		</div>
	);
}
