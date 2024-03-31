import { useState } from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { AiOutlineLoading } from "react-icons/ai";
import useSignUpWithEmailAndPassword from "../../hooks/useSignUpWithEmailAndPassword";

export default function Signup() {
	const [showPassword, setShowPassword] = useState(false);
	const [inputs, setInputs] = useState({
		fullName: "",
		username: "",
		email: "",
		password: "",
	});
	const { loading, error, signup } = useSignUpWithEmailAndPassword();

	return (
		<>
			<input
				className="border rounded-sm placeholder:text-slate-400 p-1"
				type="text"
				name="fullName"
				id="fullName"
				placeholder="Name"
				value={inputs.fullName}
				onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
			/>
			<input
				className="border rounded-sm placeholder:text-slate-400 p-1 my-2"
				type="text"
				name="username"
				id="username"
				placeholder="Username"
				value={inputs.username}
				onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
			/>
			<input
				className="border rounded-sm placeholder:text-slate-400 p-1"
				type="email"
				name="email"
				id="email"
				placeholder="Email"
				value={inputs.email}
				onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
			/>
			<div className="flex">
				<input
					className="border rounded-sm placeholder:text-slate-400 p-1 my-2 w-full"
					type={showPassword ? "text" : "password"}
					name="password"
					id="password"
					placeholder="Password"
					value={inputs.password}
					onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
				/>
				<span
					onClick={() => setShowPassword(!showPassword)}
					className="flex justify-around items-center"
				>
					<span className="absolute mr-9">
						{showPassword ? (
							<BsEyeSlash className="size-5" />
						) : (
							<BsEye className="size-5" />
						)}
					</span>
				</span>
			</div>
			<button
				onClick={() => signup(inputs)}
				className="flex justify-center rounded-md bg-sky-400 text-white p-1 my-2"
				type="submit"
			>
				{loading ? (
					<AiOutlineLoading className="animate-spin size-5 my-1" />
				) : (
					"Sign Up"
				)}
			</button>
		</>
	);
}
