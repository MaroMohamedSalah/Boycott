import PropTypes from "prop-types";

const ProductDetails = ({ details }) => {
	return (
		<>
			<h3 className="fw-bold mb-2">{details.title}</h3>
			{details.images[0] && (
				<img className="img-fluid" src={details.images[0]} alt="product img" />
			)}
			<p className="text-center">{details.manufacturer}</p>
		</>
	);
};

ProductDetails.propTypes = {
	details: PropTypes.shape({
		title: PropTypes.string.isRequired,
		images: PropTypes.arrayOf(PropTypes.string).isRequired,
		manufacturer: PropTypes.string.isRequired,
	}).isRequired,
};

export default ProductDetails;
