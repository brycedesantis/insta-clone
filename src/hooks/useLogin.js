import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth, firestore } from "../firebase/firebase";
import { doc, getDoc } from "firebase/firestore";
import useLoginStore from "../store/loginStore";
import { useState } from "react";

export default function useLogin() {
	const [signInWithEmailAndPassword, loading, error] =
		useSignInWithEmailAndPassword(auth);
	const loginUser = useLoginStore((state) => state.login);
	const [errorMsg, setErrorMsg] = useState(null);

	const login = async (inputs) => {
		setErrorMsg(null);
		try {
			if (!inputs.email || !inputs.password) {
				setErrorMsg("Please fill out all fields");
			}

			const userCred = await signInWithEmailAndPassword(
				inputs.email,
				inputs.password
			);

			if (userCred) {
				const docRef = doc(firestore, "users", userCred.user.uid);
				const docSnap = await getDoc(docRef);
				localStorage.setItem("userInfo", JSON.stringify(docSnap.data()));
				loginUser(docSnap.data());
			}
		} catch (error) {
			setErrorMsg(error);
		}
	};

	return { login, loading, error, errorMsg };
}
