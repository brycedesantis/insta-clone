import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
	const [isLogin, setIsLogin] = useState(true);
	const [inputs, setInputs] = useState({
		email: "",
		password: "",
		confirmPassword: "",
	});
	const navigate = useNavigate();

	const handleLogin = () => {
		if (!inputs.email || !inputs.password) {
			alert("Please fill out all fields");
			return;
		}

		navigate("/");
	};

	return (
		<div className="w-[350px]">
			{/* Login Form */}
			<div className="border flex flex-col justify-center items-center">
				<img className="w-44 my-3 py-2" src="./logo.png" alt="Instagram Logo" />
				<form
					className="flex flex-col w-9/12 text-sm leading-loose"
					action=""
					method="post"
				>
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
					{!isLogin ? (
						<input
							className="border rounded-sm placeholder:text-slate-400 p-1 mb-2"
							type="password"
							name="confirm password"
							id="confirmPassword"
							placeholder="Confirm Password"
							value={inputs.confirmPassword}
							onChange={(e) =>
								setInputs({ ...inputs, confirmPassword: e.target.value })
							}
						/>
					) : null}

					<button
						className="rounded-md bg-sky-400 text-white p-1 my-2"
						onClick={handleLogin}
						type="submit"
					>
						{isLogin ? "Log in" : "Sign up"}
					</button>
				</form>

				{/* OR separator */}
				<div className="flex my-4 w-9/12 items-center">
					<div className="flex-1 h-px bg-slate-300" />

					<p className="w-16 text-center text-base text-slate-700">OR</p>

					<div className="flex-1 h-px bg-slate-300" />
				</div>

				{/* Alt Login Section */}
				<div className="flex my-4 mb-8 w-9/12 justify-center cursor-pointer items-center text-sm">
					<img className="w-5" src="./google.png" alt="Google logo" />
					<p className="mx-3">Log in with Google</p>
				</div>
			</div>

			{/* Signup subsection */}
			<div className="border flex justify-center items-center my-4 p-6 text-sm">
				<div className="mx-2">
					<p>
						{isLogin ? "Don't have an account?" : "Already have an account?"}
					</p>
				</div>

				<div
					onClick={() => setIsLogin(!isLogin)}
					className="cursor-pointer text-sky-400"
				>
					<p>{isLogin ? "Sign up" : "Log in"}</p>
				</div>
			</div>
		</div>
	);
}
