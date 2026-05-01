export async function getAppData() {
	const res = await fetch(
		'https://1jbod7rtr5.execute-api.eu-central-1.amazonaws.com/prod/exercise',
		{
			headers: {
				'x-api-key': '8865cb695d00c83c542790757b5e6ad08d47c3909cc652cc',
			},
		},
	);

	if (!res.ok) {
		throw new Error(`Failed to fetch data: ${res.status} ${res.statusText}`);
	}

	return res.json();
}
