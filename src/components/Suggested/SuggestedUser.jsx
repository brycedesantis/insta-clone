import { useState } from "react";

export default function SuggestedUser({ name, img, altText }) {
	const [following, setFollowing] = useState(false);

	return (
		<div className="py-4 flex justify-between">
			<div className="flex items-center gap-3">
				<img
					className="size-10 rounded-full object-cover"
					src={img}
					alt={altText}
				/>
				<div className="flex flex-col justify-center align-middle">
					<p className="font-bold">{name}</p>
					<p className="text-gray-400 text-xs">Suggested for you</p>
				</div>
			</div>
			<button
				onClick={() => setFollowing(!following)}
				className="text-blue-500 text-xs font-semibold hover:text-black"
			>
				{following ? "Unfollow" : "Follow"}
			</button>
		</div>
	);
}
