async function fetchIssLocation() {
	const response = await fetch("http://localhost:3000/", {
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
		alert(error);
	}
}

export default fetchIssLocation;
