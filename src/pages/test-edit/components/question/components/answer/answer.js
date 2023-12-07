import { Button, Form } from 'react-bootstrap';

export const Answer = ({ answer, setTempData, questionId }) => {
	const handleChangeAnswerTitle = ({ target }, answerId, questionId) => {
		setTempData((prev) => ({
			...prev,
			questions: prev.questions.map((question) =>
				question.id === questionId
					? {
							...question,
							answers: question.answers.map((answer) =>
								answer.id === answerId
									? { ...answer, title: target.value }
									: answer,
							),
					  }
					: question,
			),
		}));
	};

	const handleChangeAnswerIsCorrect = (answerId) => {
		setTempData((prev) => ({
			...prev,
			questions: prev.questions.map((question) =>
				question.id === questionId
					? {
							...question,
							answers: question.answers.map((answer) =>
								answer.id === answerId
									? { ...answer, isCorrect: true }
									: { ...answer, isCorrect: false },
							),
					  }
					: question,
			),
		}));
	};

	const handleClickDeleteAnswer = (answerId, questionId) => {
		setTempData((prev) => ({
			...prev,
			questions: prev.questions.map((question) =>
				question.id === questionId
					? {
							...question,
							answers: question.answers.filter(
								(answer) => answer.id !== answerId,
							),
					  }
					: question,
			),
		}));
	};

	return (
		<div className="d-flex align-items-center gap-3 mt-3">
			<Form.Control
				as="textarea"
				rows={3}
				value={answer.title}
				onChange={(e) => handleChangeAnswerTitle(e, answer.id, questionId)}
			/>
			<div className="d-flex flex-column align-items-center justify-content-center gap-2">
				<Form.Check
					type="radio"
					name="checker"
					checked={answer.isCorrect}
					value={answer.id}
					onChange={() => handleChangeAnswerIsCorrect(answer.id)}
				/>
				<Button
					variant="outline-danger"
					onClick={() => handleClickDeleteAnswer(answer.id, questionId)}
				>
					X
				</Button>
			</div>
		</div>
	);
};
