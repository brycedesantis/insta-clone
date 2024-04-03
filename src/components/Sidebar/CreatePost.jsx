import { CreatePostLogo } from "../../assets/constants";

const CreatePost = () => {
	return (
		<div className="group relative flex gap-5">
			<div className="flex items-center gap-4 p-2 justify-center w-10 xl:w-full xl:justify-start cursor-pointer">
				<div className="group-hover:scale-105">
					<CreatePostLogo />
				</div>
				<div className="hidden xl:block">Create</div>
			</div>
			<span className="block xl:hidden absolute border top-0 left-12 scale-0 transition-all rounded bg-white p-2 text-xs text-black group-hover:scale-100">
				Create
			</span>
		</div>
	);
};

export default CreatePost;
