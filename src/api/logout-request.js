import axios from 'axios';

export const logoutRequest = async () => {
	try {
		const { data } = await axios.post(`api/auth/logout`);
		return data;
	} catch (err) {
		console.log('Ошибка logout', err);
		if (err.response.data.error) {
			return { error: err.response.data.error };
		}
		return { error: 'Что-то пошло не так' };
	}
};
