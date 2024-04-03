import useGetSuggestedUsers from "../../hooks/useGetSuggestedUsers";
import SuggestedHeader from "./SuggestedHeader";
import SuggestedUser from "./SuggestedUser";

export default function SuggestedSection() {
	const { isLoading, suggestedUsers } = useGetSuggestedUsers();

	if (isLoading) return null;
	return (
		<div className="pt-14 w-full">
			<SuggestedHeader />
			{suggestedUsers.length !== 0 && (
				<h1 className="text-gray-500 text-sm py-5 font-semibold">
					Suggested for you
				</h1>
			)}
			<div className="pb-4">
				{suggestedUsers.map((user) => (
					<SuggestedUser user={user} key={user.id} />
				))}
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
