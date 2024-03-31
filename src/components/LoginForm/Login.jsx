import { useState } from "react";

export default function Login() {
	const [inputs, setInputs] = useState({
		email: "",
		password: "",
	});

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
			<button
				className="rounded-md bg-sky-400 text-white p-1 my-2"
				type="submit"
			>
				Log in
			</button>
		</>
	);
}
