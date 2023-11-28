import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScanPage from "./pages/ScanPage";

function App() {
	return (
		<div className="App">
			<Router>
				<Routes>
					<Route index element={<h1>Home</h1>} />
					<Route path="/scan" element={<ScanPage />} />
					<Route path="/famous-boycott" element={<h1>Famous boycott</h1>} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
