import SuggestedHeader from "./SuggestedHeader";
import SuggestedUser from "./SuggestedUser";

export default function SuggestedSection() {
	return (
		<div className="pt-10 w-full">
			<SuggestedHeader />
			<div>
				<h1 className="text-gray-500 py-4">Suggested for you</h1>
				<SuggestedUser />
				<SuggestedUser />
				<SuggestedUser />
				<SuggestedUser />
			</div>
		</div>
	);
}
