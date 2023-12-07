import axios from '../axios';

export const updateTest = async (id, body) => {
	try {
		const { data } = await axios.post(`/tests/${id}`, body);
		return data;
	} catch (err) {
		console.log('Ошибка обновления теста', err);
	}
};
