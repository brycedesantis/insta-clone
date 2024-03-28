import { useLocation } from "react-router-dom";
import Sidebar from "../components/Sidebar";

export default function BaseLayout({ children }) {
	const { pathname } = useLocation();

	return (
		<div className="flex">
			{/* Sidebar */}
			{pathname !== "/login" ? (
				<div className="w-[70px] xl:w-60">
					<Sidebar />
				</div>
			) : null}

			{/* Content */}
			<div className="flex-1 w-[calc(100%-70px)] xl:w-[calc(100%-240px)]">
				{children}
			</div>
		</div>
	);
}
