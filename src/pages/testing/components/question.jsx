import { useEffect } from 'react';
import { Form } from 'react-bootstrap';

export const Question = ({
	data,
	questionNumber,
	questionsLength,
	value,
	setValue,
	testing,
	setTesting,
}) => {
	const questionTitle = data.questions[questionNumber].title;
	const questionAnswers = data.questions[questionNumber].answers;

	function changeValue({ target }) {
		setValue(target.value);
		setTesting((prev) => {
			return {
				...prev,
				[questionTitle]: target.value,
			};
		});
	}

	useEffect(() => {
		if (testing[questionTitle]) {
			setValue(testing[questionTitle]);
			return;
		}

		setValue('');
	}, [questionNumber, questionTitle, setValue, testing]);

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
						className="mb-3 text-start"
						type="radio"
						name="flexRadioDefault"
						id={`flexRadioDefault${index}`}
						label={answer.title}
						value={answer.title}
						checked={value === answer.title ? true : false}
						onChange={changeValue}
					/>
				))}
			</Form>
		</>
	);
};
