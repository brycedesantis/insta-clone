import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import BaseLayout from "./Layout/BaseLayout";
import ProfilePage from "./pages/ProfilePage";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase/firebase";
import EditProfile from "./components/ProfilePage/EditProfile";

function App() {
	const [loginUser] = useAuthState(auth);

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
				<Route path="/:username" element={<ProfilePage />} />
				<Route
					path="/edit"
					element={loginUser ? <EditProfile /> : <Navigate to="/login" />}
				/>
			</Routes>
		</BaseLayout>
	);
}

export default App;
