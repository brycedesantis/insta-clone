import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { firestore } from "../firebase/firebase";
import useUserProfileStore from "../store/userProfileStore";
import { toast } from "react-hot-toast";

const useGetUserProfileByUsername = (username) => {
	const [isLoading, setIsLoading] = useState(true);
	const { userProfile, setUserProfile } = useUserProfileStore();

	useEffect(() => {
		const getUserProfile = async () => {
			setIsLoading(true);
			try {
				const userQuery = query(
					collection(firestore, "users"),
					where("username", "==", username)
				);
				const querySnapshot = await getDocs(userQuery);

				if (querySnapshot.empty) return setUserProfile(null);

				let userDoc;
				querySnapshot.forEach((doc) => {
					userDoc = doc.data();
				});

				setUserProfile(userDoc);
			} catch (error) {
				toast.error(error);
			} finally {
				setIsLoading(false);
			}
		};

		getUserProfile();
	}, [setUserProfile, username]);

	return { isLoading, userProfile };
};

export default useGetUserProfileByUsername;
