import { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";
import GoogleLogin from "./GoogleLogin";

export default function LoginForm() {
	const [isLogin, setIsLogin] = useState(true);

	return (
		<>
			<div className="w-[350px]">
				{/* Login Form */}
				<div className="border flex flex-col justify-center items-center">
					<img
						className="w-44 my-3 py-2"
						src="./logo.png"
						alt="Instagram Logo"
					/>
					<div
						className="flex flex-col w-9/12 text-sm leading-loose"
						action=""
						method="post"
					>
						{isLogin ? <Login /> : <Signup />}
					</div>

					{/* OR separator */}
					<div className="flex my-4 w-9/12 items-center">
						<div className="flex-1 h-px bg-slate-300" />

						<p className="w-16 text-center text-base text-slate-700">OR</p>

						<div className="flex-1 h-px bg-slate-300" />
					</div>

					{/* Alt Login Section */}
					<GoogleLogin prefix={isLogin ? "Log in" : "Sign up"} />
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
		</>
	);
}
