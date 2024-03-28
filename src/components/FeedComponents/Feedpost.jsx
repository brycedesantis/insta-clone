import Postfooter from "./Postfooter";
import Postheader from "./Postheader";

export default function Feedpost() {
	return (
		<>
			<Postheader />
			<div className="rounded overflow-hidden">
				<img src="../img1.png" alt="" />
			</div>
			<Postfooter />
		</>
	);
}
