import { useEffect, useState } from "react";
import useLoginStore from "../store/loginStore";
import {
	collection,
	getDocs,
	limit,
	orderBy,
	query,
	where,
} from "firebase/firestore";
import { firestore } from "../firebase/firebase";
import { toast } from "react-hot-toast";

const useGetSuggestedUsers = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [suggestedUsers, setSuggestedUsers] = useState([]);
	const loginUser = useLoginStore((state) => state.user);

	useEffect(() => {
		const getSuggestedUsers = async () => {
			setIsLoading(true);
			try {
				const userRef = collection(firestore, "users");
				const q = query(
					userRef,
					where("userId", "not-in", [loginUser.userId, ...loginUser.following]),
					orderBy("userId"),
					limit(3)
				);

				const querySnapshot = await getDocs(q);
				const users = [];

				querySnapshot.forEach((doc) => {
					users.push({ ...doc.data(), id: doc.id });
				});

				setSuggestedUsers(users);
			} catch (error) {
				toast.error(error);
			} finally {
				setIsLoading(false);
			}
		};

		if (loginUser) getSuggestedUsers();
	}, [loginUser]);

	return { isLoading, suggestedUsers };
};

export default useGetSuggestedUsers;
