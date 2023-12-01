import { Button, TextField } from "@mui/material";
import PropTypes from "prop-types";
import { useState } from "react";

const WriteCode = ({ setCode, setShowResult }) => {
	const [writtenCode, setWrittenCode] = useState(null);

	const handleShowResult = () => {
		if (writtenCode) {
			setCode(writtenCode);
			setShowResult(true);
		}
	};

	return (
		<div className="WriteCode w-100">
			<TextField
				id="filled-basic"
				label="Write the Barcode Here"
				variant="filled"
				fullWidth
				value={writtenCode}
				onChange={(e) => setWrittenCode(e.target.value)}
			/>
			<Button
				className="text-white my-4"
				disabled={!writtenCode}
				onClick={handleShowResult}
			>
				Confirm
			</Button>
		</div>
	);
};

// PropTypes
WriteCode.propTypes = {
	setCode: PropTypes.func.isRequired,
	setShowResult: PropTypes.func.isRequired,
};

export default WriteCode;
