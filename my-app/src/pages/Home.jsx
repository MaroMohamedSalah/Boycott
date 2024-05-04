import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Button from "@mui/material/Button";

const Home = () => {
	return (
		<div className="Home h-100">
			<Nav />

			<div className="h-50">
				<div className="container h-100 d-flex justify-content-center align-items-center my-5">
					<Link to={"./scan"} className="w-100">
						<Button variant="contained" className="py-4 rounded-3" fullWidth>
							Scan
						</Button>
					</Link>
				</div>
			</div>
			<Button
				variant="contained"
				className="py-3 px-5 opacity-75 mb-3 rounded-3"
			>
				Others
			</Button>

			<Footer />
		</div>
	);
};

export default Home;
