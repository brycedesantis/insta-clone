import { useState } from "react";
import useLoginStore from "../store/loginStore";
import { firestore } from "../firebase/firebase";
import { arrayRemove, arrayUnion, doc, updateDoc } from "firebase/firestore";
import { toast } from "react-hot-toast";

const useLikePost = (post) => {
	const [isLiking, setIsLiking] = useState(false);
	const loginUser = useLoginStore((state) => state.user);
	const [likes, setLikes] = useState(post.likes.length);
	const [isLiked, setIsLiked] = useState(
		post.likes.includes(loginUser?.userId)
	);

	const handleLikePost = async () => {
		if (isLiking) return;
		setIsLiking(true);

		try {
			const postRef = doc(firestore, "posts", post.id);
			await updateDoc(postRef, {
				likes: isLiked
					? arrayRemove(loginUser.userId)
					: arrayUnion(loginUser.userId),
			});

			setIsLiked(!isLiked);
			isLiked ? setLikes(likes - 1) : setLikes(likes + 1);
		} catch (error) {
			toast.error(error);
		} finally {
			setIsLiking(false);
		}
	};

	return { isLiked, likes, handleLikePost, isLiking };
};

export default useLikePost;
