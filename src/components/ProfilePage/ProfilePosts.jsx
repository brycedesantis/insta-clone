import useGetUserPosts from "../../hooks/useGetUserPosts";
import ProfileImages from "./ProfileImages";

export default function ProfilePosts() {
	const { isLoading, posts } = useGetUserPosts();

	const noPostsFound = !isLoading && posts.length === 0;

	if (noPostsFound) return <NoPostsFound />;

	return (
		<>
			<div className="grid grid-cols-3 gap-1">
				{!isLoading && (
					<>
						{posts.map((post) => (
							<ProfileImages post={post} key={post.id} />
						))}
					</>
				)}
			</div>
		</>
	);
}

const NoPostsFound = () => {
	return (
		<div className="flex flex-col text-center mx-auto mt-10">
			<p className="text-2xl">No Posts Found</p>
		</div>
	);
};
