export default function ProfileHeader() {
	return (
		<>
			<img
				className="size-36 mr-8 rounded-full object-cover"
				src="./profilepic.png"
				alt="profile picture"
			/>

			<div className="flex flex-col gap-4 w-full">
				<div className="flex items-center gap-6">
					<h1 className="text-xl">brycedesant</h1>
					<button className="hover:bg-gray-200 py-2 px-3 rounded-lg">
						Edit profile
					</button>
				</div>
				<div className="flex justify-start gap-10">
					<div>
						{" "}
						<span className="font-semibold">7</span> posts
					</div>
					<div>
						{" "}
						<span className="font-semibold">600</span> followers
					</div>
					<div>
						{" "}
						<span className="font-semibold">274</span> following
					</div>
				</div>
				<div>
					<h1 className="text-sm font-semibold">Bryce DeSantis</h1>
					<p className="text-xs">Self taught front end developer</p>
				</div>
			</div>
		</>
	);
}
