import axios from 'axios';

export const updateTestRequest = async (id, body) => {
	try {
		const { data } = await axios.post(`api/tests/${id}`, body);
		return data;
	} catch (err) {
		console.log('Ошибка обновления теста', err);
	}
};
