import { useState } from "react";
import useLoginStore from "../store/loginStore";
import usePostStore from "../store/postStore";
import useUserProfileStore from "../store/userProfileStore";
import { useLocation } from "react-router-dom";
import {
	addDoc,
	arrayUnion,
	collection,
	doc,
	updateDoc,
} from "firebase/firestore";
import { firestore, storage } from "../firebase/firebase";
import { getDownloadURL, ref, uploadString } from "firebase/storage";

const useCreatePost = () => {
	const [isLoading, setIsLoading] = useState(false);
	const loginUser = useLoginStore((state) => state.user);
	const createPost = usePostStore((state) => state.createPost);
	const addPost = useUserProfileStore((state) => state.addPost);
	const userProfile = useUserProfileStore((state) => state.userProfile);
	const { pathname } = useLocation();

	const handleCreatePost = async (selectedFile, caption) => {
		if (isLoading) return;
		if (!selectedFile) throw new Error("Please select an image");
		setIsLoading(true);
		const newPost = {
			caption: caption,
			likes: [],
			comments: [],
			createdAt: Date.now(),
			createdBy: loginUser.userId,
		};

		try {
			const postDocRef = await addDoc(collection(firestore, "posts"), newPost);
			const userDocRef = doc(firestore, "users", loginUser.userId);
			const imageRef = ref(storage, `posts/${postDocRef.id}`);
			await updateDoc(userDocRef, { posts: arrayUnion(postDocRef.id) });
			await uploadString(imageRef, selectedFile, "data_url");
			const downloadUrl = await getDownloadURL(imageRef);
			await updateDoc(postDocRef, { imageURL: downloadUrl });

			newPost.imageURL = downloadUrl;

			if (userProfile.userId === loginUser.userId)
				createPost({ ...newPost, id: postDocRef.id });

			if (pathname !== "/" && userProfile.userId === loginUser.userId)
				addPost({ ...newPost, id: postDocRef.id });
		} catch (error) {
			console.log(error);
		} finally {
			setIsLoading(false);
		}
	};

	return { isLoading, handleCreatePost };
};

export default useCreatePost;
