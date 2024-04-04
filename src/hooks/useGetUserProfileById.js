import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { firestore } from "../firebase/firebase";

const useGetUserProfileById = (userId) => {
	const [isLoading, setIsLoading] = useState(true);
	const [userProfile, setUserProfile] = useState("");

	useEffect(() => {
		const getUserProfilebyId = async () => {
			setIsLoading(true);
			setUserProfile("");
			try {
				const userRef = await getDoc(doc(firestore, "users", userId));
				if (userRef.exists()) {
					setUserProfile(userRef.data());
				}
			} catch (error) {
				console.log(error);
			} finally {
				setIsLoading(false);
			}
		};
		getUserProfilebyId();
	}, [setUserProfile, userId]);

	return { isLoading, userProfile, setUserProfile };
};

export default useGetUserProfileById;
