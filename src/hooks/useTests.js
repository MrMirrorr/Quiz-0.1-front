import { useEffect, useState } from 'react';
import { getTestsRequest } from '../api';

export const useTests = (showError) => {
	const [loading, setLoading] = useState(true);
	const [tests, setTests] = useState([]);
	useEffect(() => {
		const fetchTests = async () => {
			const testsFromServer = await getTestsRequest();

			if (testsFromServer.error) {
				showError(testsFromServer.error);
			} else {
				setTests(testsFromServer);
			}

			setLoading(false);
		};

		fetchTests();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return { loading, tests };
};
