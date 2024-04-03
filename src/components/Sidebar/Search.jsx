import { useRef, useState } from "react";
import { SearchLogo } from "../../assets/constants";
import SearchModal from "../Modal/SearchModal";
import useSearchUser from "../../hooks/useSearchUser";

const Search = () => {
	const [isOpen, setIsOpen] = useState(false);
	const searchRef = useRef(null);
	const { user, isLoading, getUserProfile, setUser } = useSearchUser();

	const handleSearchUser = (e) => {
		e.preventDefault();
		getUserProfile(searchRef.current.value);
	};

	console.log(user);

	return (
		<>
			<div className="group relative flex gap-5">
				<div
					onClick={() => setIsOpen(true)}
					className="flex items-center gap-4 p-2 justify-center w-10 xl:w-full xl:justify-start cursor-pointer"
				>
					<div className="group-hover:scale-105">
						<SearchLogo />
					</div>
					<div className="hidden xl:block">Search</div>
				</div>
				<span className="block xl:hidden absolute border top-0 left-12 scale-0 transition-all rounded bg-white p-2 text-xs text-black group-hover:scale-100">
					Search
				</span>
			</div>

			<SearchModal
				isOpen={isOpen}
				onClose={() => setIsOpen(false)}
				isLoading={isLoading}
				handleSearchUser={handleSearchUser}
				searchRef={searchRef}
				user={user}
				setUser={setUser}
			/>
		</>
	);
};

export default Search;
