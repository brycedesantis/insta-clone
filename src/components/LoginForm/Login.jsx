import { useState } from "react";
import useLogin from "../../hooks/useLogin";
import { AiOutlineLoading } from "react-icons/ai";
import { BiErrorCircle } from "react-icons/bi";

export default function Login() {
	const [inputs, setInputs] = useState({
		email: "",
		password: "",
	});
	const { loading, login, error } = useLogin();

	return (
		<>
			<input
				className="border rounded-sm placeholder:text-slate-400 p-1"
				type="email"
				name="email"
				id="email"
				placeholder="Email"
				value={inputs.email}
				onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
			/>
			<input
				className="border rounded-sm placeholder:text-slate-400 p-1 my-2"
				type="password"
				name="password"
				id="password"
				placeholder="Password"
				value={inputs.password}
				onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
			/>

			{error && (
				<div className="bg-red-100 flex items-center">
					<BiErrorCircle className="fill-red-300 size-9 mx-1" />
					<div className="p-2">{error.message}</div>
				</div>
			)}

			<button
				onClick={() => login(inputs)}
				className="rounded-md bg-sky-400 text-white p-1 my-2"
				type="submit"
			>
				{loading ? (
					<AiOutlineLoading className="animate-spin size-5 my-1" />
				) : (
					"Log in"
				)}
			</button>
		</>
	);
}
