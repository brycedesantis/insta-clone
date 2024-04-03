import { AiFillHome } from "react-icons/ai";
import { Link } from "react-router-dom";

const Home = () => {
	return (
		<div className="group relative flex gap-5">
			<Link
				to={"/"}
				className="flex items-center gap-4 p-2 justify-center w-10 xl:w-full xl:justify-start"
			>
				<div className="group-hover:scale-105">
					<AiFillHome className="size-6" />
				</div>
				<div className="hidden xl:block">Home</div>
			</Link>
			<span className="block xl:hidden absolute border top-0 left-12 scale-0 transition-all rounded bg-white p-2 text-xs text-black group-hover:scale-100">
				Home
			</span>
		</div>
	);
};

export default Home;
