import Feedposts from "../components/FeedComponents/Feedposts";
import SuggestedSection from "../components/Suggested/SuggestedSection";

export default function HomePage() {
	return (
		<div className="w-full">
			<div className="flex justify-center gap-14 w-full">
				<div className="flex justify-center max-w-2xl w-full py-10">
					<Feedposts />
				</div>
				<div className="hidden lg:block max-w-80 w-full mr-20">
					{/* <SuggestedSection /> */}
				</div>
			</div>
		</div>
	);
}
