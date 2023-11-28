import { useState } from "react";
import { getCountry } from "../services/ScannerServices";
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
	TextField,
} from "@mui/material";

const ScanPage = () => {
	const [camera, setCamera] = useState(false);
	const [result, setResult] = useState(null);

	const onDetected = (result) => {
		setResult(result);
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
					<TextField
						id="filled-basic"
						label="Write the Barcode Here"
						variant="filled"
						fullWidth
					/>
				</div>
				<Dialog
					className="scanPopup"
					open={camera}
					onClose={() => setCamera(false)}
					aria-labelledby="alert-dialog-title"
					aria-describedby="alert-dialog-description"
				>
					<DialogTitle id="alert-dialog-title">{"Scan the code"}</DialogTitle>
					<DialogContent>
						<DialogContentText id="alert-dialog-slide-description">
							Code: {result ? result : "Scanning"}
						</DialogContentText>
						{camera && <Scanner onDetected={onDetected} />}
					</DialogContent>
					<DialogActions>
						<Button className="text-white" onClick={() => setCamera(false)}>
							Cancel
						</Button>
						<Button className="text-white" onClick={() => setCamera(false)}>
							Confirm
						</Button>
					</DialogActions>
				</Dialog>
			</div>

			<Footer />
		</div>
	);
};

export default ScanPage;
