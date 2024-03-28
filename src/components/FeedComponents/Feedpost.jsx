import Postfooter from "./Postfooter";
import Postheader from "./Postheader";

export default function Feedpost({ img, username }) {
	return (
		<>
			<Postheader username={username} img={img} />
			<div className="rounded overflow-hidden">
				<img src={img} alt={`${username}'s picture`} />
			</div>
			<Postfooter username={username} />
		</>
	);
}
