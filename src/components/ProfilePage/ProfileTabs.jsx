import { BsGrid3X3, BsBookmark } from "react-icons/bs";
import { MdOutlinePortrait } from "react-icons/md";

export default function ProfileTabs() {
	return (
		<>
			<div className="flex justify-center gap-16 text-sm">
				<div className="border-t-black border-t-2 py-4 flex items-center gap-2 cursor-pointer">
					<BsGrid3X3 />
					<p>POSTS</p>
				</div>
				<div className="py-4 flex items-center gap-2 cursor-pointer">
					<BsBookmark />
					<p>SAVED</p>
				</div>
				<div className="py-4 flex items-center gap-2 cursor-pointer">
					<MdOutlinePortrait />
					<p>TAGGED</p>
				</div>
			</div>
		</>
	);
}
