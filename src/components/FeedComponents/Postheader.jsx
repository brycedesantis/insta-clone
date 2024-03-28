import { useState } from "react";

export default function Postheader() {
	const [following, setFollowing] = useState(true);

	return (
		<>
			<div className="flex justify-between items-center py-3 text-xs">
				<div className="flex items-center">
					<img
						className="size-9 rounded-full ring-2 ring-rose-500 ring-offset-1"
						src="./img1.png"
						alt=""
					/>
					<div className="flex items-center gap-1">
						<p className="font-bold pl-2">Jane Doe</p>
						<p>• 1w</p>
					</div>
				</div>
				<div className="">
					<button
						onClick={() => setFollowing(!following)}
						className="text-blue-500 text-sm hover:text-black"
					>
						{following ? "Unfollow" : "Follow"}
					</button>
				</div>
			</div>
		</>
	);
}
