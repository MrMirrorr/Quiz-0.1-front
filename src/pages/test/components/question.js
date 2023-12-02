import { Form } from 'react-bootstrap';

export const Question = ({ data, questionsNum }) => {
	return (
		<>
			<div className="mb-1">
				Вопрос {questionsNum + 1} из {data.questions.length}
			</div>
			<div className="mb-5 fs-3 fw-bold">{data.questions[questionsNum].title}</div>
			<Form
				className="d-flex flex-column align-items-start m-auto"
				style={{ maxWidth: 400 }}
			>
				{data.questions[questionsNum].answers.map((answer) => (
					<Form.Check
						key={answer.title}
						className="mb-3"
						type="radio"
						name="answer"
						label={answer.title}
					/>
				))}
			</Form>
		</>
	);
};
