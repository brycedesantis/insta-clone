import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { auth, firestore } from "../../firebase/firebase";
import useLoginStore from "../../store/loginStore";
import { BiErrorCircle } from "react-icons/bi";
import { doc, getDoc, setDoc } from "firebase/firestore";

export default function GoogleLogin({ prefix }) {
	const [signInWithGoogle, error] = useSignInWithGoogle(auth);
	const loginUser = useLoginStore((state) => state.login);
	const handleGoogleLogin = async () => {
		try {
			const newUser = await signInWithGoogle();
			if (!newUser && error) {
				console.log(error);
				return;
			}

			const userRef = doc(firestore, "users", newUser.user.uid);
			const userSnapshot = await getDoc(userRef);

			if (userSnapshot.exists()) {
				//login function
				const userDoc = userSnapshot.data();
				localStorage.setItem("userInfo", JSON.stringify(userDoc));
				loginUser(userDoc);
			} else {
				//sign up function
				const userInfo = {
					userId: newUser.user.uid,
					fullName: newUser.user.displayName,
					username: newUser.user.email.split("@")[0],
					email: newUser.user.email,
					bio: "",
					profilePicture: newUser.user.photoURL,
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
			console.log(error);
		}
	};

	return (
		<>
			<div
				onClick={handleGoogleLogin}
				className="flex my-4 mb-8 w-9/12 justify-center cursor-pointer items-center text-sm"
			>
				<img className="w-5" src="./google.png" alt="Google logo" />
				<p className="mx-3">{prefix} with Google</p>
			</div>

			{error && (
				<div className="bg-red-100 flex items-center">
					<BiErrorCircle className="fill-red-300 size-9 mx-1" />
					<div className="p-2">{error.message}</div>
				</div>
			)}
		</>
	);
}
