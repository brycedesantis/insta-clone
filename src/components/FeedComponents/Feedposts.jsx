import Feedpost from "./Feedpost";

export default function Feedposts() {
	return (
		<div className="py-10 px-2 max-w-md">
			<Feedpost username="jane_doe" img="./img1.png" />
			<Feedpost username="greg_johnson" img="./img2.png" />
			<Feedpost username="mandaranda" img="./img3.png" />
			<Feedpost username="thelonephotographer" img="./img4.png" />
		</div>
	);
}
