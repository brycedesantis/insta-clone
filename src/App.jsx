import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import BaseLayout from "./Layout/BaseLayout";
import ProfilePage from "./pages/ProfilePage";
import useLoginStore from "./store/loginStore";

function App() {
	const loginUser = useLoginStore((state) => state.user);

	return (
		<BaseLayout>
			<Routes>
				<Route
					path="/"
					element={loginUser ? <HomePage /> : <Navigate to="/login" />}
				/>
				<Route
					path="/login"
					element={!loginUser ? <LoginPage /> : <Navigate to="/" />}
				/>
				<Route path="/:user" element={<ProfilePage />} />
			</Routes>
		</BaseLayout>
	);
}

export default App;
