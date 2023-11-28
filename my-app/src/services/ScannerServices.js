export const getCountry = (barCode) => {
	const countryCode = barCode.slice(0, 3);
	if (countryCode === "622") {
		return "Not Boycott";
	} else {
		return "Boycott";
	}
};
