import { useEffect, useState } from 'react';
import { getTests } from '../api';

export const useGetTest = () => {
	const [data, setData] = useState(null);

	useEffect(() => {
		getTests().then(([_, res]) => res && setData(res));
	}, []);

	return data;
};
