import { AiOutlineLoading } from "react-icons/ai";
import useGetFeedPosts from "../../hooks/useGetFeedPosts";
import Feedpost from "./Feedpost";

export default function Feedposts() {
	const { isLoading, posts } = useGetFeedPosts();

	return (
		<div className="py-10 px-2 max-w-md">
			{isLoading && <AiOutlineLoading className="animate-spin size-36 my-1" />}
			{!isLoading &&
				posts.length > 0 &&
				posts.map((post) => <Feedpost key={post.id} post={post} />)}
			{!isLoading && posts.length === 0 && (
				<div className="flex flex-col items-center">
					<p>It looks a little lonely here.</p>
					<p>Follow more users to populate your feed.</p>
				</div>
			)}
		</div>
	);
}
