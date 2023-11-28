import { Link } from "react-router-dom";
import MainLogo from "./MainLogo";
import "./nav.css";

const Nav = () => {
	return (
		<nav className="Nav">
			<div className="container d-flex justify-content-between align-items-center py-2">
				<MainLogo />
				<Link to={"#"}>العربية</Link>
			</div>
		</nav>
	);
};

export default Nav;