import SuggestedHeader from "./SuggestedHeader";
import SuggestedUser from "./SuggestedUser";

export default function SuggestedSection() {
	return (
		<div className="pt-14 w-full">
			<SuggestedHeader />
			<h1 className="text-gray-500 text-sm py-5 font-semibold">
				Suggested for you
			</h1>
			<div className="pb-4">
				<SuggestedUser
					name="ayo-ogunseinde"
					img="./ayo-ogunseinde-unsplash.jpg"
					altText="Photo by Ayo Ogunseinde on Unsplash"
				/>
				<SuggestedUser
					name="luisvillasmil"
					img="./luis-villasmil-unsplash.jpg"
					altText="Photo by Luis Villasmil on Unsplash"
				/>
				<SuggestedUser
					name="arya-dubey"
					img="./arya-dubey-unsplash.jpg"
					altText="Photo by Arya Dubey on Unsplash"
				/>
			</div>
			<div className="text-gray-300 text-xs">
				© {new Date().getFullYear()} created by{" "}
				<a
					className="text-blue-500"
					href="https://github.com/brycedesantis"
					target="_blank"
				>
					Bryce Desantis
				</a>
			</div>
		</div>
	);
}
