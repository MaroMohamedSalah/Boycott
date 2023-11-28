import { useState } from "react";
import { getCountry } from "./services/ScannerServices";
import Scanner from "./components/Scanner";

const ScanPage = () => {
	const [camera, setCamera] = useState(false);
	const [result, setResult] = useState(null);

	const onDetected = (result) => {
		setResult(result);
	};
	return (
		<div className="ScanPage">
			<p>{result ? result : "Scanning..."}</p>
			<p>{result && getCountry(result)}</p>
			<button onClick={() => setCamera(!camera)}>
				{camera ? "Stop" : "Start"}
			</button>
			<div className="container">
				{camera && <Scanner onDetected={onDetected} />}
			</div>
		</div>
	);
};

export default ScanPage;
