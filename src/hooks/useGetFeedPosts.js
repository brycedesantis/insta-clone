import { useEffect, useState } from "react";
import usePostStore from "../store/postStore";
import useLoginStore from "../store/loginStore";
import useUserProfileStore from "../store/userProfileStore";
import { collection, getDocs, query, where } from "firebase/firestore";
import { firestore } from "../firebase/firebase";

const useGetFeedPosts = () => {
	const [isLoading, setIsLoading] = useState(true);
	const { posts, setPosts } = usePostStore();
	const loginUser = useLoginStore((state) => state.user);
	const { setUserProfile } = useUserProfileStore();

	useEffect(() => {
		const getFeedPosts = async () => {
			setIsLoading(true);
			if (loginUser.following.length === 0) {
				setIsLoading(false);
				setPosts([]);
				return;
			}

			const q = query(
				collection(firestore, "posts"),
				where("createdBy", "in", loginUser.following)
			);

			try {
				const querySnapshot = await getDocs(q);
				const feedPosts = [];

				querySnapshot.forEach((doc) => {
					feedPosts.push({ id: doc.id, ...doc.data() });
				});

				feedPosts.sort((a, b) => b.createdAt - a.createdAt);
				setPosts(feedPosts);
			} catch (error) {
				console.log(error);
			} finally {
				setIsLoading(false);
			}
		};
		if (loginUser) getFeedPosts();
	}, [loginUser, setPosts, setUserProfile]);

	return { isLoading, posts };
};

export default useGetFeedPosts;
