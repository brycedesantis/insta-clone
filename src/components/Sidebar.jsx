import { Link } from "react-router-dom";
import {
	CreatePostLogo,
	InstagramLogo,
	InstagramMobileLogo,
	NotificationsLogo,
	SearchLogo,
} from "../assets/constants";
import { AiFillHome } from "react-icons/ai";
import { BiLogOut } from "react-icons/bi";
import useLogout from "../hooks/useLogout";

export default function Sidebar() {
	const sidebarItems = [
		{
			icon: <AiFillHome className="size-6" />,
			text: "Home",
			link: "/",
		},
		{
			icon: <SearchLogo />,
			text: "Search",
		},
		{
			icon: <NotificationsLogo />,
			text: "Notifications",
		},
		{
			icon: <CreatePostLogo />,
			text: "Create",
		},
		{
			icon: (
				<img
					className="w-6 rounded-full ring-2 ring-white"
					src="/profilepic.png"
					alt="Profile Picture"
				/>
			),
			text: "Profile",
			link: "/:username",
		},
	];

	const { handleLogout, isLoggingOut } = useLogout();

	return (
		<div className="h-screen border-r py-7 sticky top-0 left-0 px-2 md:px-4">
			<div className="flex flex-col gap-10 h-full w-full">
				<Link to={"/"} className="pl-2 hidden xl:block">
					<InstagramLogo />
				</Link>
				<Link to={"/"} className="p-2 block xl:hidden w-10 hover:scale-110">
					<InstagramMobileLogo />
				</Link>

				{/* sidebar items */}
				<div className="flex flex-col gap-7">
					{sidebarItems.map((item) => (
						<div
							key={crypto.randomUUID()}
							className="group relative flex gap-5"
						>
							<Link
								to={item.link || null}
								className="flex items-center gap-4 p-2 justify-center w-10 xl:w-full xl:justify-start"
							>
								<div className="group-hover:scale-105">{item.icon}</div>
								<div className="hidden xl:block">{item.text}</div>
							</Link>
							<span className="block xl:hidden absolute border top-0 left-12 scale-0 transition-all rounded bg-white p-2 text-xs text-black group-hover:scale-100">
								{item.text}
							</span>
						</div>
					))}
				</div>

				{/* log out button */}
				<div
					onClick={handleLogout}
					className="group relative flex gap-5 mt-auto cursor-pointer"
				>
					<div className="flex items-center gap-4 p-2 justify-center w-10 xl:w-full xl:justify-start">
						<BiLogOut className="size-6 group-hover:scale-105" />
						<div className="hidden xl:block">Logout</div>
					</div>
					<span className="block xl:hidden absolute border top-0 left-12 scale-0 transition-all rounded bg-white p-2 text-xs text-black group-hover:scale-100">
						Logout
					</span>
				</div>
			</div>
		</div>
	);
}
