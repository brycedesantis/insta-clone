import { useRef, useState } from "react";
import { AiOutlineLoading } from "react-icons/ai";
import { BsImages } from "react-icons/bs";
import usePreviewImage from "../../hooks/usePreviewImage";
import useCreatePost from "../../hooks/useCreatePost";

const CreatePostModal = ({ isOpen, onClose }) => {
	const [caption, setCaption] = useState("");
	const imageRef = useRef(null);
	const { handleImageChange, selectedFile, setSelectedFile } =
		usePreviewImage();
	const { handleCreatePost, isLoading } = useCreatePost();

	if (!isOpen) return null;

	const handleClose = (e) => {
		if (e.target.id === "wrapper") onClose();
	};

	const handlePostCreation = async () => {
		try {
			await handleCreatePost(selectedFile, caption);
			onClose();
			setCaption("");
			setSelectedFile(null);
		} catch (error) {
			console.log(error);
		}
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

				<div className="p-2">
					<div className="flex flex-col justify-start border-2 bg-white w-full md:w-96 py-3 px-4 rounded">
						<h1 className="py-3 font-bold text-lg">Create Post</h1>
						<div className="flex flex-col">
							<textarea
								className="resize-none py-1 pl-1 my-1 border rounded-sm"
								placeholder="Post caption"
								value={caption}
								onChange={(e) => setCaption(e.target.value)}
							></textarea>
							<input
								type="file"
								className="hidden"
								ref={imageRef}
								onChange={handleImageChange}
							/>
							<BsImages
								onClick={() => imageRef.current.click()}
								className="size-5 my-2 cursor-pointer"
							/>

							{selectedFile && (
								<div className="flex w-full relative mt-5 justify-center">
									<img src={selectedFile} alt="Selected image" />
									<button
										onClick={() => setSelectedFile("")}
										className="absolute top-2 right-2"
									>
										Cancel
									</button>
								</div>
							)}
						</div>
						<button
							onClick={handlePostCreation}
							className="bg-sky-500 hover:bg-sky-600 text-white py-1 px-2 mt-2 rounded-lg place-self-end flex justify-center"
						>
							{isLoading ? (
								<AiOutlineLoading className="animate-spin size-5 my-1" />
							) : (
								"Post"
							)}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CreatePostModal;
