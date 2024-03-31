import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth, firestore } from "../firebase/firebase";
import { doc, setDoc } from "firebase/firestore";

export default function useSignUpWithEmailAndPassword() {
	const [createUserWithEmailAndPassword, loading, error] =
		useCreateUserWithEmailAndPassword(auth);

	const signup = async (inputs) => {
		if (
			!inputs.email ||
			!inputs.fullName ||
			!inputs.username ||
			!inputs.password
		) {
			console.log("Please fill out all fields");
			return;
		}

		try {
			const newUser = await createUserWithEmailAndPassword(
				inputs.email,
				inputs.password
			);
			if (!newUser && error) {
				console.log(error);
				return;
			}

			if (newUser) {
				const userInfo = {
					userId: newUser.user.uid,
					fullName: inputs.fullName,
					username: inputs.username,
					email: inputs.email,
					bio: "",
					profilePicture: "",
					followers: [],
					following: [],
					posts: [],
					createdDate: Date.now(),
				};

				await setDoc(doc(firestore, "users", newUser.user.uid), userInfo);
				localStorage.setItem("userInfo", JSON.stringify(userInfo));
			}
		} catch (error) {
			console.log(error);
		}
	};

	return { loading, error, signup };
}
