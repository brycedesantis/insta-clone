import { useState } from "react";
import useLoginStore from "../store/loginStore";
import { firestore, storage } from "../firebase/firebase";
import { getDownloadURL, ref, uploadString } from "firebase/storage";
import { doc, updateDoc } from "firebase/firestore";
import useUserProfileStore from "../store/userProfileStore";
import { toast } from "react-hot-toast";

export default function useEditProfile() {
	const [isUpdating, setIsUpdating] = useState(false);
	const loginUser = useLoginStore((state) => state.user);
	const setLoginUser = useLoginStore((state) => state.setUser);
	const setUserProfile = useUserProfileStore((state) => state.setUserProfile);

	const editProfile = async (inputs, selectedFile) => {
		if (isUpdating || !loginUser) return;

		setIsUpdating(true);
		const storageRef = ref(storage, `profilePictures/${loginUser.userId}`);
		const userDocRef = doc(firestore, "users", loginUser.userId);

		let URL = "";
		try {
			if (selectedFile) {
				await uploadString(storageRef, selectedFile, "data_url");
				URL = await getDownloadURL(storageRef);
			}

			const updateUser = {
				...loginUser,
				fullName: inputs.fullName || loginUser.fullName,
				username: inputs.username || loginUser.username,
				bio: inputs.bio || loginUser.bio,
				profilePicture: URL || loginUser.profilePicture,
			};

			await updateDoc(userDocRef, updateUser);
			localStorage.setItem("userInfo", JSON.stringify(updateUser));
			setLoginUser(updateUser);
			setUserProfile(updateUser);

			toast.success("Profile updated successfully");
		} catch (error) {
			toast.error(error);
		}
	};

	return { editProfile, isUpdating };
}
