import { useState } from "react";

export default function Postheader({ img, username }) {
	const [following, setFollowing] = useState(true);

	return (
		<>
			<div className="flex justify-between items-center py-3 text-xs mt-2">
				<div className="flex items-center">
					<img
						className="size-9 rounded-full ring-2 ring-rose-500 ring-offset-1 object-cover"
						src={img}
						alt={`${username}'s profile picture`}
					/>
					<div className="flex items-center gap-1">
						<p className="font-bold pl-2">{username}</p>
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
