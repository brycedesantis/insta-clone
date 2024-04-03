import { useLocation } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/firebase";
import Navbar from "../components/Navbar/Navbar";

export default function BaseLayout({ children }) {
	const { pathname } = useLocation();
	const [user, loading] = useAuthState(auth);
	const renderSidebar = pathname !== "/login" && user;
	const renderNavbar = !user && !loading && pathname !== "/login";

	return (
		<div className={"flex " + (renderNavbar ? "flex-col" : "flex-row")}>
			{/* Sidebar */}
			{renderSidebar ? (
				<div className="w-[70px] xl:w-60">
					<Sidebar />
				</div>
			) : null}
			{/* Navbar */}
			{renderNavbar ? <Navbar /> : null}
			{/* Content */}
			<div className="flex-1 w-[calc(100%-70px)] xl:w-[calc(100%-240px)] mx-auto">
				{children}
			</div>
		</div>
	);
}
