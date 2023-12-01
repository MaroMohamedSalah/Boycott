import { Link } from "react-router-dom";
import MainLogo from "./MainLogo";
import "./nav.css";

const Nav = () => {
	return (
		<nav className="Nav">
			<div className="container d-flex justify-content-between align-items-center py-4">
				<Link to={"#"}>العربية</Link>
				<MainLogo />
			</div>
		</nav>
	);
};

export default Nav;
