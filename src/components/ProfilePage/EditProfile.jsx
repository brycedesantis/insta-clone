import { useRef, useState } from "react";
import useUserProfileStore from "../../store/userProfileStore";
import useLoginStore from "../../store/loginStore";
import usePreviewImage from "../../hooks/usePreviewImage";
import useEditProfile from "../../hooks/useEditProfile";
import { AiOutlineLoading } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function EditProfile() {
	const { userProfile } = useUserProfileStore();
	const [inputs, setInputs] = useState({
		fullName: "",
		username: "",
		bio: "",
	});
	const loginUser = useLoginStore((state) => state.user);
	const fileRef = useRef(null);
	const { handleImageChange, selectedFile, setSelectedFile } =
		usePreviewImage();
	const { isUpdating, editProfile } = useEditProfile();
	const handleEditProfile = async () => {
		try {
			await editProfile(inputs, selectedFile);
			setSelectedFile(null);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="w-full max-w-3xl mx-auto flex flex-col justify-start pt-8">
			<h1 className="font-bold text-xl py-4 mb-2">Edit Profile</h1>

			<div
				to={`${userProfile.username}`}
				className="flex items-center justify-between"
			>
				<div className="flex items-center">
					<img
						className="size-16 rounded-full object-cover"
						src={selectedFile || userProfile.profilePicture}
						alt="user profile picture"
					/>
					<div className="flex flex-col pl-2">
						<p className="font-bold text-sm">{userProfile.username}</p>
						<p className="text-xs">{userProfile.fullName}</p>
					</div>
				</div>
				<button
					onClick={() => fileRef.current.click()}
					className="bg-sky-500 p-2 hover:bg-sky-600 text-white py-1 px-3 rounded-lg"
				>
					Change photo
				</button>
				<input
					type="file"
					className="hidden"
					ref={fileRef}
					onChange={handleImageChange}
				/>
			</div>

			<div className="flex flex-col pt-8">
				<label className="flex flex-col my-4">
					Full Name
					<textarea
						className="border-2 resize-none rounded-lg mt-2 pl-2 pt-1"
						name="bio"
						id="bio"
						placeholder={userProfile.fullName}
						value={inputs.fullName || loginUser.fullName}
						onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
					></textarea>
				</label>

				<label className="flex flex-col my-4">
					Username
					<textarea
						className="border-2 resize-none rounded-lg mt-2 pl-2 pt-1"
						name="bio"
						id="bio"
						placeholder={userProfile.username}
						value={inputs.username || loginUser.username}
						onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
					></textarea>
				</label>

				<label className="flex flex-col my-4">
					Bio
					<textarea
						className="border-2 resize-none rounded-lg mt-2 pl-2 pt-1"
						name="bio"
						id="bio"
						placeholder={userProfile.bio}
						value={inputs.bio || loginUser.bio}
						onChange={(e) => setInputs({ ...inputs, bio: e.target.value })}
					></textarea>
				</label>
			</div>
			<Link
				to={`/${loginUser.username}`}
				onClick={handleEditProfile}
				className="bg-sky-500 hover:bg-sky-600 text-white p-3 rounded-lg w-1/4 my-5 place-self-end flex justify-center"
			>
				{isUpdating ? (
					<AiOutlineLoading className="animate-spin size-5 my-1" />
				) : (
					"Submit"
				)}
			</Link>
		</div>
	);
}
