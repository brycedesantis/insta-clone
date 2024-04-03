import CreatePost from "./CreatePost";
import Home from "./Home";
import Notifications from "./Notifications";
import ProfileSidebar from "./ProfileSidebar";
import Search from "./Search";

const SidebarItems = () => {
	return (
		<>
			<Home />
			<Search />
			<Notifications />
			<CreatePost />
			<ProfileSidebar />
		</>
	);
};

export default SidebarItems;
