export default function LoginPage() {
	return (
		<>
			<div className="w-full h-screen bg-inherit">
				<div className="flex justify-center items-center w-full h-full mt-8 pb-5">
					{/* Promo image */}
					<div>
						<img src="/auth.png" alt="Promo Image" />
					</div>

					{/* Sign in form */}
					<div className="flex flex-col items-center">
						{/* Form placeholder */}
						<h1>Login form</h1>
						<section className="container flex flex-col items-center gap-4">
							<h1>Get the app.</h1>
							<div className="flex gap-2">
								<img
									className="h-11"
									src="/appstore.png"
									alt="App Store Link"
								/>
								<img
									className="h-11"
									src="/playstore.png"
									alt="Play Store Link"
								/>
							</div>
						</section>
					</div>
				</div>
			</div>
		</>
	)
}
