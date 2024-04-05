import { useState, useEffect } from "react";
import useLoginStore from "../store/loginStore";
import useUserProfileStore from "../store/userProfileStore";
import { firestore } from "../firebase/firebase";
import { arrayRemove, arrayUnion, doc, updateDoc } from "firebase/firestore";
import { toast } from "react-hot-toast";

const useFollowAndUnfollowUser = (userId) => {
	const [isUpdating, setIsUpdating] = useState(false);
	const [isFollowing, setIsFollowing] = useState(false);
	const loginUser = useLoginStore((state) => state.user);
	const setLoginUser = useLoginStore((state) => state.setUser);
	const { userProfile, setUserProfile } = useUserProfileStore();

	const handleFollowUser = async () => {
		setIsUpdating(true);
		try {
			const currentUserRef = doc(firestore, "users", loginUser.userId);
			const userToFollowAndUnfollowRef = doc(firestore, "users", userId);

			await updateDoc(currentUserRef, {
				following: isFollowing ? arrayRemove(userId) : arrayUnion(userId),
			});

			await updateDoc(userToFollowAndUnfollowRef, {
				followers: isFollowing
					? arrayRemove(loginUser.userId)
					: arrayUnion(loginUser.userId),
			});

			if (isFollowing) {
				//unfollow
				setLoginUser({
					...loginUser,
					following: loginUser.following.filter((uid) => uid !== userId),
				});

				if (userProfile)
					setUserProfile({
						...userProfile,
						followers: userProfile.followers.filter(
							(uid) => uid !== loginUser.userId
						),
					});

				localStorage.setItem(
					"userInfo",
					JSON.stringify({
						...loginUser,
						following: loginUser.following.filter((uid) => uid !== userId),
					})
				);
				setIsFollowing(false);
			} else {
				//follow
				setLoginUser({
					...loginUser,
					following: [...loginUser.following, userId],
				});

				if (userProfile)
					setUserProfile({
						...userProfile,
						followers: [...userProfile.followers, loginUser.userId],
					});

				localStorage.setItem(
					"userInfo",
					JSON.stringify({
						...loginUser,
						following: [...loginUser.following, userId],
					})
				);
				setIsFollowing(true);
			}
		} catch (error) {
			toast.error(error);
		} finally {
			setIsUpdating(false);
		}
	};

	useEffect(() => {
		if (loginUser) {
			const followingUser = loginUser.following.includes(userId);
			setIsFollowing(followingUser);
		}
	}, [loginUser, userId]);

	return { isUpdating, isFollowing, handleFollowUser };
};

export default useFollowAndUnfollowUser;
