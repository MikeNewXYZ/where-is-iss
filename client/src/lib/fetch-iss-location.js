async function fetchIssLocation() {
	const response = await fetch(
		"https://server-production-3ba6.up.railway.app",
		{
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
		},
	);

	if (response.ok) {
		const { latitude, longitude } = await response.json();

		return { latitude, longitude };
	} else {
		const error = await response.text();
		console.error(error);
	}
}

export default fetchIssLocation;
