import { useState } from 'react';

export const useError = () => {
	const [error, setError] = useState({ show: false, message: '' });

	const showError = (message) => {
		setError({ show: true, message });
	};

	const closeError = () => {
		setError({ show: false, message: '' });
	};

	return {
		showError,
		closeError,
		isShowError: error.show,
		errorMessage: error.message,
	};
};
