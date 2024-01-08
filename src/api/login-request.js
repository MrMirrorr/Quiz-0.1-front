import axios from 'axios';

export const loginRequest = async (body) => {
	try {
		const { data } = await axios.post(`api/auth/login`, body);
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
