import { useState } from "react";
import useLoginStore from "../store/loginStore";
import usePostStore from "../store/postStore";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { firestore } from "../firebase/firebase";

const usePostComment = () => {
	const [isCommenting, setIsCommenting] = useState(false);
	const loginUser = useLoginStore((state) => state.user);
	const addComment = usePostStore((state) => state.addComment);

	const handlePostComment = async (postId, comment) => {
		if (isCommenting) return;
		setIsCommenting(true);
		const newComment = {
			comment,
			createdAt: Date.now(),
			createdBy: loginUser.userId,
			postId,
		};

		try {
			await updateDoc(doc(firestore, "posts", postId), {
				comments: arrayUnion(newComment),
			});
			addComment(postId, newComment);
		} catch (error) {
			console.log(error);
		} finally {
			setIsCommenting(false);
		}
	};

	return { isCommenting, handlePostComment };
};

export default usePostComment;
