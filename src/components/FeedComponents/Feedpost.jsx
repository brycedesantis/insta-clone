import useGetUserProfileById from "../../hooks/useGetUserProfileById";
import Postfooter from "./Postfooter";
import Postheader from "./Postheader";

export default function Feedpost({ post }) {
	const { isLoading, userProfile } = useGetUserProfileById(post.createdBy);

	return (
		<>
			<Postheader post={post} createdBy={userProfile} />
			<div className="rounded overflow-hidden">
				<img src={post.imageURL} alt={`${post.username}'s picture`} />
			</div>
			<Postfooter post={post} createdBy={userProfile} />
		</>
	);
}
