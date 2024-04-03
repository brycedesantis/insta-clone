import { Link } from "react-router-dom";
import useLoginStore from "../../store/loginStore";

const ProfileSidebar = () => {
	const loginUser = useLoginStore((state) => state.user);

	return (
		<div className="group relative flex gap-5">
			<Link
				to={`/${loginUser?.username}`}
				className="flex items-center gap-4 p-2 justify-center w-10 xl:w-full xl:justify-start"
			>
				<div className="group-hover:scale-105">
					<img
						className="w-6 rounded-full ring-2 ring-white"
						src={loginUser?.profilePicture}
						alt="Profile Picture"
					/>
				</div>
				<div className="hidden xl:block">Profile</div>
			</Link>
			<span className="block xl:hidden absolute border top-0 left-12 scale-0 transition-all rounded bg-white p-2 text-xs text-black group-hover:scale-100">
				Profile
			</span>
		</div>
	);
};

export default ProfileSidebar;
