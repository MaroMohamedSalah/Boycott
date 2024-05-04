import { useEffect, useState } from "react";
import Scanner from "../components/Scanner";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import "./scanPage.css";
import {
	Backdrop,
	Button,
	CircularProgress,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
	Divider,
} from "@mui/material";
import { getItemDetails, isBoycott } from "../services/ScannerServices";
import WriteCode from "../components/WriteCode";
import ProductDetails from "../components/ProductDetails";

const ScanPage = () => {
	const [camera, setCamera] = useState(false);
	const [code, setCode] = useState(null);
	const [result, setResult] = useState(null);
	const [showResult, setShowResult] = useState(false);
	const [itemDetails, setItemDetails] = useState([]);
	const [loading, setLoading] = useState(false);

	const onDetected = (result) => {
		setCode(result);
	};

	const handleGetResult = async (code) => {
		if (isBoycott(code)) {
			setResult("Boycott");
			setShowResult(true);
			try {
				const details = await getItemDetails(code, setLoading);
				setItemDetails(details);
			} catch (error) {
				console.error("Error getting item details:", error);
				setItemDetails([]);
			}
		} else {
			setResult("Not Boycott ❤️");
			setShowResult(true);
			setLoading(false);
		}
	};

	useEffect(() => {
		console.log(itemDetails);
	}, [itemDetails]);
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
					<WriteCode setCode={setCode} handleGetResult={handleGetResult} />
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
						<Button
							className="text-white"
							onClick={() => handleGetResult(code)}
						>
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
					fullWidth
					maxWidth={"xl"}
				>
					<DialogTitle id="alert-dialog-title">{"The Result"}</DialogTitle>
					<DialogContent>
						<DialogContentText id="alert-dialog-slide-description">
							<h1>{result && result}</h1>
						</DialogContentText>
					</DialogContent>
					<Divider />
					<DialogContent>
						<DialogContentText id="alert-dialog-slide-description">
							<div className="itemDetails">
								{loading ? (
									<Backdrop
										sx={{
											color: "#fff",
											zIndex: (theme) => theme.zIndex.drawer + 1,
										}}
										open={loading}
									>
										<CircularProgress color="inherit" />
									</Backdrop>
								) : (
									itemDetails && <ProductDetails details={itemDetails} />
								)}
							</div>
						</DialogContentText>
					</DialogContent>
					<DialogActions>
						<Button className="text-white">Help Us</Button>
						<Button
							className="text-white"
							onClick={() =>
								window.open(
									"https://palestine-market-e-commerce.vercel.app/",
									"_blank"
								)
							}
						>
							Alternatives
						</Button>
					</DialogActions>
				</Dialog>
			</div>

			<Footer />
		</div>
	);
};

export default ScanPage;
