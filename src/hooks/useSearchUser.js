import { collection, getDocs, query, where } from "firebase/firestore";
import { useState } from "react";
import { firestore } from "../firebase/firebase";

const useSearchUser = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [user, setUser] = useState(null);

	const getUserProfile = async (username) => {
		setIsLoading(true);
		try {
			const q = query(
				collection(firestore, "users"),
				where("username", "==", username)
			);
			const querySnapshot = await getDocs(q);
			if (querySnapshot.empty) console.log("User not found");

			querySnapshot.forEach((doc) => {
				setUser(doc.data());
			});
		} catch (error) {
			console.log(error);
			setUser(null);
		} finally {
			setIsLoading(false);
		}
	};

	return { isLoading, user, getUserProfile, setUser };
};

export default useSearchUser;
