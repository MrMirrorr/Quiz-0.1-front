import axios from 'axios';

export const getTestsRequest = async () => {
	try {
		const { data } = await axios.get('api/tests');
		return data;
	} catch (err) {
		console.log('Ошибка получения тестов', err);
		if (err.response.data.error) {
			return { error: err.response.data.error };
		}
		return { error: 'Что-то пошло не так' };
	}
};
