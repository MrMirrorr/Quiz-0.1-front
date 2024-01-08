import axios from 'axios';

export const registerRequest = async (body) => {
	try {
		const { data } = await axios.post(`api/auth/register`, body);
		return data;
	} catch (err) {
		console.log('Ошибка регистрации', err);
		if (err.response.data.error) {
			return { error: err.response.data.error };
		}
		if (err.response.data.msg) {
			return { error: err.response.data.msg };
		}
		return { error: 'Что-то пошло не так' };
	}
};
