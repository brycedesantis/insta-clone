import { AiOutlineLoading } from "react-icons/ai";
import SuggestedUser from "../Suggested/SuggestedUser";

const SearchModal = ({
	isOpen,
	onClose,
	searchRef,
	isLoading,
	handleSearchUser,
	user,
	setUser,
}) => {
	if (!isOpen) return null;

	const handleClose = (e) => {
		if (e.target.id === "wrapper") onClose();
	};

	return (
		<div
			id="wrapper"
			onClick={handleClose}
			className="w-full fixed inset-0 bg-black bg-opacity-20 z-50 flex justify-center items-start"
		>
			<div className="md:max-w-6xl max-w-4xl mx-auto flex flex-col pb-6">
				<button
					onClick={() => onClose()}
					className="text-white text-xl place-self-end"
				>
					X
				</button>

				<div className="p-2">
					<div className="flex flex-col justify-start border bg-white w-full md:w-96 py-3 px-4 rounded">
						<h1 className="py-3 font-bold text-lg">Search User</h1>
						<form onSubmit={handleSearchUser}>
							<label className="flex flex-col">
								Username
								<input
									className="py-1 pl-1 my-1 border rounded-sm"
									type="text"
									placeholder="Search"
									ref={searchRef}
								/>
							</label>
							<div className="flex justify-end">
								<button
									type="submit"
									className="ml-auto my-4 text-blue-500 hover:text-black"
								>
									{isLoading ? (
										<AiOutlineLoading className="animate-spin size-5 my-1" />
									) : (
										"Search"
									)}
								</button>
							</div>
						</form>

						{user && (
							<SuggestedUser user={user} inSearch={true} setUser={setUser} />
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default SearchModal;
