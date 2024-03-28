import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import BaseLayout from "./Layout/BaseLayout";
import ProfilePage from "./pages/ProfilePage";

function App() {
	return (
		<BaseLayout>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/login" element={<LoginPage />} />
				<Route path="/:user" element={<ProfilePage />} />
			</Routes>
		</BaseLayout>
	);
}

export default App;
