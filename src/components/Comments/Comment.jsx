export default function Comment({ username, img, comment, createdDate }) {
	return (
		<>
			<div className="flex items-center gap-3 py-1">
				<img
					className="size-9 rounded-full object-cover"
					src={img}
					alt="profile picture"
				/>
				<div className="gap-1">
					<div className="flex gap-1 items-center">
						<h1 className="text-sm font-semibold">{username}</h1>
						<p className="text-sm">{comment}</p>
					</div>
					<div className="text-gray-400 text-xs">{createdDate}</div>
				</div>
			</div>
		</>
	);
}
