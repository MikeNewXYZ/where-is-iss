async function fetchIssLocation() {
	const response = await fetch(__SERVER_URL_ENV__, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
	});

	if (response.ok) {
		const { latitude, longitude } = await response.json();

		return { latitude, longitude };
	} else {
		const error = await response.text();
		console.error(error);
	}
}

export default fetchIssLocation;
