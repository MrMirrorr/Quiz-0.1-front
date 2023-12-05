import { useEffect, useState } from 'react';

export const useGetTest = () => {
	const [data, setData] = useState(null);

	useEffect(() => {
		fetch('/api/')
			.then((res) => {
				if (res.ok) {
					return res;
				}
				const error =
					res.status === 404
						? 'Такая страница не существует'
						: 'Что-то пошло не так.';
				return Promise.reject(error);
			})
			.then((res) => res.json())
			.then(([res]) => res && setData(res));
	}, []);

	return data;
};
