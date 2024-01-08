import axios from 'axios';

export const createTestRequest = async (body) => {
	try {
		const { data } = await axios.post(`api/tests`, body);
		return data;
	} catch (err) {
		console.log('Ошибка создания теста', err);
	}
};
