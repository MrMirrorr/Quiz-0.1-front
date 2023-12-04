import { Form } from 'react-bootstrap';

export const Question = ({
	data,
	questionNumber,
	value,
	setValue,
	setIsChecked,
	setTesting,
	questionsLength,
	testing,
}) => {
	const questionTitle = data.questions[questionNumber].title;
	const questionAnswers = data.questions[questionNumber].answers;

	function chengeValue(event) {
		setValue(event.target.value);
		setIsChecked(true);
		setTesting((prev) => {
			return {
				...prev,
				[questionTitle]: event.target.value,
			};
		});
		console.log(testing);
	}

	return (
		<>
			<div className="mb-1">
				Вопрос {questionNumber + 1} из {questionsLength}
			</div>
			<div className="mb-5 fs-3 fw-bold">{questionTitle}</div>
			<Form
				className="d-flex flex-column align-items-start m-auto"
				style={{ maxWidth: 400 }}
			>
				{questionAnswers.map((answer, index) => (
					<Form.Check
						key={answer.title}
						className=" mb-3"
						type="radio"
						name="flexRadioDefault"
						id={`flexRadioDefault${index}`}
						label={answer.title}
						value={answer.title}
						checked={value === answer.title ? true : false}
						onChange={(e) => chengeValue(e)}
					/>
				))}
			</Form>
		</>
	);
};
