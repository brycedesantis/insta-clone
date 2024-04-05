import { useSignOut } from "react-firebase-hooks/auth";
import { auth } from "../firebase/firebase";
import useLoginStore from "../store/loginStore";
import { toast } from "react-hot-toast";

export default function useLogout() {
	const [signOut, isLoggingOut, error] = useSignOut(auth);
	const logoutUser = useLoginStore((state) => state.logout);

	const handleLogout = async () => {
		try {
			await signOut();
			localStorage.removeItem("userInfo");
			logoutUser();
		} catch (error) {
			toast.error(error);
		}
	};

	return { handleLogout, isLoggingOut, error };
}
