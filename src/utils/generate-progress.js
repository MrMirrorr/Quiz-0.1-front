export const generateProgress = (data, testing) => {
	let progress = [];

	const results = Object.entries(testing);

	results.map((result) => {
		const findQuestion = data.questions.find(
			(question) => question.title === result[0],
		);
		const findAnswer = findQuestion.answers.find(
			(answer) => answer.title === result[1],
		);

		if (findAnswer.isCorrect) {
			progress.push(true);
			return result;
		} else {
			progress.push(false);
			return result;
		}
	});

	return progress;
};
