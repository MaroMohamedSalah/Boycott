import { useState } from "react";
import Scanner from "../components/Scanner";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import "./scanPage.css";
import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
	Divider,
} from "@mui/material";
import { isBoycottOrNot } from "../services/ScannerServices";
import WriteCode from "../components/WriteCode";

const ScanPage = () => {
	const [camera, setCamera] = useState(false);
	const [code, setCode] = useState(null);
	const [showResult, setShowResult] = useState(false);

	const onDetected = (result) => {
		setCode(result);
	};
	return (
		<div className="ScanPage h-100">
			<Nav />

			<div className="h-75">
				<div className="container d-flex justify-content-center align-items-center flex-column h-100">
					<Button
						variant="contained"
						className="py-4 rounded-3"
						fullWidth
						onClick={() => setCamera(!camera)}
					>
						Scan
					</Button>
					<Divider className="my-3">OR</Divider>
					<WriteCode setCode={setCode} setShowResult={setShowResult} />
				</div>
				<Dialog
					className="scanPopup"
					open={camera}
					onClose={() => setCamera(null)}
					aria-labelledby="alert-dialog-title"
					aria-describedby="alert-dialog-description"
				>
					<DialogTitle id="alert-dialog-title">{"Scan the code"}</DialogTitle>
					<DialogContent>
						<DialogContentText id="alert-dialog-slide-description">
							Code: {code ? code : "Scanning.."}
						</DialogContentText>
						{camera && <Scanner onDetected={onDetected} />}
					</DialogContent>
					<DialogActions>
						<Button className="text-white" onClick={() => setCamera(null)}>
							Cancel
						</Button>
						<Button className="text-white" onClick={() => setShowResult(true)}>
							Confirm
						</Button>
					</DialogActions>
				</Dialog>
				<Dialog
					className="Result"
					open={showResult}
					onClose={() => setShowResult(false)}
					aria-labelledby="alert-dialog-title"
					aria-describedby="alert-dialog-description"
				>
					<DialogTitle id="alert-dialog-title">{"The Result"}</DialogTitle>
					<DialogContent>
						<DialogContentText id="alert-dialog-slide-description">
							<h1>
								{code && isBoycottOrNot(code) ? "Boycott" : "Not Boycott ❤️"}
							</h1>
						</DialogContentText>
					</DialogContent>
					<DialogActions>
						{/* <Button className="text-white" onClick={() => setCamera(false)}>
							Cancel
						</Button>
						<Button className="text-white" onClick={() => setCamera(false)}>
							Confirm
						</Button> */}
					</DialogActions>
				</Dialog>
			</div>

			<Footer />
		</div>
	);
};

export default ScanPage;
