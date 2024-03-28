import { Link } from "react-router-dom";

export default function SuggestedHeader() {
	return (
		<div className="flex justify-between items-center py-2">
			<div className="flex items-center">
				<img
					className="size-9 rounded-full object-cover"
					src="./profilepic.png"
					alt="user profile picture"
				/>

				<p className="font-bold text-sm pl-2">brycedesant</p>
			</div>
			<div>
				<Link to={"/login"} className="text-blue-500 text-sm hover:text-black">
					Log out
				</Link>
			</div>
		</div>
	);
}
