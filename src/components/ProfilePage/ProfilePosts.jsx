import ProfileImages from "./ProfileImages";

export default function ProfilePosts() {
	return (
		<>
			<div className="grid grid-cols-3 gap-1">
				<ProfileImages img="./img1.png" />
				<ProfileImages img="./img2.png" />
				<ProfileImages img="./img3.png" />
				<ProfileImages img="./img4.png" />
			</div>
		</>
	);
}
