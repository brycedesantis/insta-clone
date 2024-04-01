import { Link } from "react-router-dom";

export default function Navbar() {
	return (
		<div className="max-w-5xl m-auto">
			<div className="flex w-full justify-center sm:justify-between items-center">
				<img
					className="h-20 hidden sm:block cursor-pointer"
					src="./logo.png"
					alt=""
				/>
				<div className="flex gap-4">
					<Link to="/login">
						<button className="rounded-md bg-sky-500 hover:bg-sky-700 text-white px-4 py-1">
							Login
						</button>
					</Link>
					<Link to="/login">
						<button className=" text-sky-500 p-2 hover:text-sky-700">
							Sign Up
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
}
