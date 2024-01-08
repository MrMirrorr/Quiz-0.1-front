import { useLayoutEffect, useState } from 'react';
import { authMeRequest } from '../api';

export const useAuth = (showError) => {
	const [loading, setLoading] = useState(true);
	const [user, setUser] = useState(null);
	useLayoutEffect(() => {
		const fetchAuthMe = async () => {
			const userDataFromServer = await authMeRequest();

			if (userDataFromServer.error) {
				showError(userDataFromServer.error);
			} else {
				setUser(userDataFromServer);
			}

			setLoading(false);
		};

		fetchAuthMe();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return { loading, user, setUser };
};
