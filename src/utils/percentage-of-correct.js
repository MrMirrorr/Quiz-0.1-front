import { amountOfCorrect } from './amount-of-correct';

export const percentageOfCorrect = (results) => {
	const totalAmount = results.length;
	const amountOfTrue = amountOfCorrect(results);
	return Math.round((amountOfTrue * 100) / totalAmount);
};
