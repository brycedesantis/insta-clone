import { BsTrash } from "react-icons/bs";
import Comment from "../Comments/Comment";
import Postfooter from "../FeedComponents/Postfooter";

export default function ProfileModal({ isOpen, onClose, img }) {
	if (!isOpen) return null;

	const handleClose = (e) => {
		if (e.target.id === "wrapper") onClose();
	};

	return (
		<div
			id="wrapper"
			onClick={handleClose}
			className="w-full fixed inset-0 bg-black bg-opacity-20 z-50 flex justify-center items-center"
		>
			<div className="md:max-w-6xl max-w-4xl mx-auto flex flex-col pb-6">
				<button
					onClick={() => onClose()}
					className="text-white text-xl place-self-end"
				>
					X
				</button>

				<div className=" p-2">
					<div className="flex flex-col md:flex-row w-11/12 sm:w-[70%] md:w-full mx-auto">
						<div className="overflow-hidden flex-1">
							<img
								className="size-full aspect-square object-cover"
								src={img}
								alt=""
							/>
						</div>

						<div className="flex flex-col w-full md:w-2/6 pt-3 px-4 bg-white">
							<div className="flex justify-between items-center py-2">
								<div className="flex items-center gap-3">
									<img
										className="size-9 rounded-full object-cover"
										src="./profilepic.png"
										alt=""
									/>
									<h1 className="text-sm font-semibold">brycedesant</h1>
								</div>
								<BsTrash className=" cursor-pointer hover:scale-110 hover:fill-red-400" />
							</div>

							<div className="hidden md:flex max-h-[535px] my-8 flex-col gap-4 items-start overflow-y-auto">
								<Comment
									username="ayo-ogunseinde"
									img="./ayo-ogunseinde-unsplash.jpg"
									comment="Great work!"
									createdDate="10w"
								/>
								<Comment
									username="luisvillasmil"
									img="./luis-villasmil-unsplash.jpg"
									comment="Amazing photo!"
									createdDate="2w"
								/>
								<Comment
									username="arya-dubey"
									img="./arya-dubey-unsplash.jpg"
									comment="Miss you!"
									createdDate="10h"
								/>
								<Comment
									username="ayo-ogunseinde"
									img="./ayo-ogunseinde-unsplash.jpg"
									comment="Great work!"
									createdDate="10w"
								/>
								<Comment
									username="luisvillasmil"
									img="./luis-villasmil-unsplash.jpg"
									comment="Amazing photo!"
									createdDate="2w"
								/>
								<Comment
									username="arya-dubey"
									img="./arya-dubey-unsplash.jpg"
									comment="Miss you!"
									createdDate="10h"
								/>
								<Comment
									username="ayo-ogunseinde"
									img="./ayo-ogunseinde-unsplash.jpg"
									comment="Great work!"
									createdDate="10w"
								/>
								<Comment
									username="luisvillasmil"
									img="./luis-villasmil-unsplash.jpg"
									comment="Amazing photo!"
									createdDate="2w"
								/>
								<Comment
									username="arya-dubey"
									img="./arya-dubey-unsplash.jpg"
									comment="Miss you!"
									createdDate="10h"
								/>
								<Comment
									username="ayo-ogunseinde"
									img="./ayo-ogunseinde-unsplash.jpg"
									comment="Great work!"
									createdDate="10w"
								/>
								<Comment
									username="luisvillasmil"
									img="./luis-villasmil-unsplash.jpg"
									comment="Amazing photo!"
									createdDate="2w"
								/>
								<Comment
									username="arya-dubey"
									img="./arya-dubey-unsplash.jpg"
									comment="Miss you!"
									createdDate="10h"
								/>
							</div>

							<div className="mt-auto">
								<Postfooter profilePage={true} />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
