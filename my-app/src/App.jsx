import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScanPage from "./pages/ScanPage";
import "./App.css";
import Home from "./pages/Home";

function App() {
	return (
		<div className="App">
			<Router>
				<Routes>
					<Route index element={<Home />} />
					<Route path="/scan" element={<ScanPage />} />
					<Route path="/famous-boycott" element={<h1>Famous boycott</h1>} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
