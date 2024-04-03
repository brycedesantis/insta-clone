import { Link } from "react-router-dom";
import useLogout from "../../hooks/useLogout";
import useLoginStore from "../../store/loginStore";

export default function SuggestedHeader() {
	const { handleLogout } = useLogout();
	const loginUser = useLoginStore((state) => state.user);

	if (!loginUser) return null;

	return (
		<div className="flex justify-between items-center py-2">
			<Link to={`${loginUser.username}`} className="flex items-center">
				<img
					className="size-12 rounded-full object-cover"
					src={`${loginUser.profilePicture}`}
					alt="user profile picture"
				/>

				<p className="font-bold text-sm pl-2">{loginUser.username}</p>
			</Link>
			<div>
				<div
					onClick={handleLogout}
					className="text-blue-500 text-sm font-semibold hover:text-black cursor-pointer"
				>
					Log out
				</div>
			</div>
		</div>
	);
}
