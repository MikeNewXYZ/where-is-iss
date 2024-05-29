async function fetchIssLocation() {
	const response = await fetch("http://api.open-notify.org/iss-now.json");

	if (response.ok) {
		const data = await response.json();
		const { latitude, longitude } = data.iss_position;

		return { latitude, longitude };
	}

	return undefined;
}

export default fetchIssLocation;
