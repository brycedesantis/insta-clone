import { useState } from "react";
import { FaHeart, FaComment } from "react-icons/fa";
import ProfileModal from "../Modal/ProfileModal";

export default function ProfileImages({ img }) {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
			{/* profile post */}
			<div
				onClick={() => setIsOpen(true)}
				className="cursor-pointer overflow-hidden aspect-square relative rounded-sm"
			>
				<div className="opacity-0 hover:opacity-100 bg-[#00000077] z-10 absolute top-0 right-0 bottom-0 left-0 flex justify-center items-center gap-3">
					<div className="flex gap-2 align-middle">
						<FaHeart className="fill-white size-6" />
						<p className="text-white">44</p>
					</div>
					<div className="flex gap-2 align-middle">
						<FaComment className="fill-white size-6 -scale-x-100" />
						<p className="text-white">44</p>
					</div>
				</div>

				<img className="size-full object-cover" src={img} alt="profile post" />
			</div>

			{/* post modal */}
			<ProfileModal
				img={img}
				isOpen={isOpen}
				onClose={() => setIsOpen(false)}
			/>
		</>
	);
}
