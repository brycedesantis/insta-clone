import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth, firestore } from "../firebase/firebase";
import {
	collection,
	doc,
	getDocs,
	query,
	setDoc,
	where,
} from "firebase/firestore";
import useLoginStore from "../store/loginStore";
import { useState } from "react";

export default function useSignUpWithEmailAndPassword() {
	const [createUserWithEmailAndPassword, loading, error] =
		useCreateUserWithEmailAndPassword(auth);
	const loginUser = useLoginStore((state) => state.login);
	const [errorMsg, setErrorMsg] = useState(null);

	const signup = async (inputs) => {
		const userRef = collection(firestore, "users");
		const userQuery = query(userRef, where("username", "==", inputs.username));
		const querySnapshot = await getDocs(userQuery);
		setErrorMsg(null);

		try {
			const newUser = await createUserWithEmailAndPassword(
				inputs.email,
				inputs.password
			);

			if (
				!inputs.email ||
				!inputs.fullName ||
				!inputs.username ||
				!inputs.password
			) {
				setErrorMsg("Please fill out all fields");
			}

			if (!querySnapshot.empty) {
				setErrorMsg("Username already exists");
			}

			if (!newUser && error) {
				setErrorMsg(error);
			}

			if (newUser) {
				const userInfo = {
					userId: newUser.user.uid,
					fullName: inputs.fullName,
					username: inputs.username,
					email: inputs.email,
					bio: "",
					profilePicture: "./avatar-placeholder.png",
					followers: [],
					following: [],
					posts: [],
					createdDate: Date.now(),
				};

				await setDoc(doc(firestore, "users", newUser.user.uid), userInfo);
				localStorage.setItem("userInfo", JSON.stringify(userInfo));
				loginUser(userInfo);
			}
		} catch (error) {
			setErrorMsg(error);
		}
	};

	return { loading, error, signup, errorMsg };
}
