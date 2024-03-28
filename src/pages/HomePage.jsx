import Feedposts from "../components/FeedComponents/Feedposts";

export default function HomePage() {
	return (
		<div className="container">
			<div className="flex justify-center gap-14 w-full">
				<div className="flex justify-center max-w-2xl w-full py-10">
					<Feedposts />
				</div>
				<div className="border border-red-500 hidden lg:block max-w-72 w-full mr-20">
					suggestions section
				</div>
			</div>
		</div>
	);
}
