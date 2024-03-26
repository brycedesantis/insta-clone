import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import BaseLayout from "./Layout/BaseLayout";

function App() {
	return (
		<BaseLayout>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/login" element={<LoginPage />} />
			</Routes>
		</BaseLayout>
	);
}

export default App;
