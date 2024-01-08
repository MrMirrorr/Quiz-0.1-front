import axios from 'axios';

export const authMeRequest = async () => {
	try {
		const { data } = await axios.get(`api/auth/me`);
		return data;
	} catch (err) {
		console.log('Ошибка авторизации', err);
		if (err.response.data.error) {
			return { error: err.response.data.error };
		}
		if (err.response.data.msg) {
			return { error: err.response.data.msg };
		}
		return { error: 'Что-то пошло не так' };
	}
};
