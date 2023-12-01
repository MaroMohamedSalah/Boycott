export const getFirst3Numbers = (string) => {
	return string.slice(0, 3);
};

export const isBoycott = (barCode) => {
	const countryCode = getFirst3Numbers(barCode);
	if (countryCode === "622") {
		return false;
	} else {
		return true;
	}
};

export const getItemDetails = async (barCode, setLoading) => {
	setLoading(true);

	const url = `https://barcodes1.p.rapidapi.com/?query=${barCode}`;
	const options = {
		method: "GET",
		headers: {
			"X-RapidAPI-Key": "251033cf4emshf3054a8b4557678p1fac0ajsn81864a3c4d44",
			"X-RapidAPI-Host": "barcodes1.p.rapidapi.com",
		},
	};

	try {
		const response = await fetch(url, options);

		if (!response.ok) {
			throw new Error(`Request failed with status: ${response.status}`);
		}

		const result = await response.json();

		if (result && result.product) {
			setLoading(false); // Set loading to false on successful response
			return result.product;
		} else {
			console.error("No product details found");
			setLoading(false); // Set loading to false if product details are not available
			return {}; // Return empty object if product details are not available
		}
	} catch (error) {
		console.error("Error fetching item details:", error);
		setLoading(false); // Set loading to false in case of any error
		return {}; // Return empty object in case of any error
	}
};
