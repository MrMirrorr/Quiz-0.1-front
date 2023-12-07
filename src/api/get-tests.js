import axios from '../axios';

export const getTests = async () => {
	try {
		const { data } = await axios.get('/tests');
		return data;
	} catch (err) {
		console.log('Ошибка получения тестов', err);
	}
};
