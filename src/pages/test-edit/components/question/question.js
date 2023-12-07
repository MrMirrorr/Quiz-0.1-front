import { Accordion, Button, Form } from 'react-bootstrap';
import { Answer } from './components';
import { generateId } from '../../utils';

export const Question = ({ question, setTempData }) => {
	const handleChangeQuestionTitle = ({ target }, questionId) => {
		setTempData((prev) => ({
			...prev,
			questions: prev.questions.map((question) =>
				question.id === questionId
					? { ...question, title: target.value }
					: question,
			),
		}));
	};

	const handleClickDeleteQuestion = (questionId) => {
		setTempData((prev) => ({
			...prev,
			questions: prev.questions.filter((question) => question.id !== questionId),
		}));
	};

	const handleClickCreateAnswer = (questionId) => {
		setTempData((prev) => ({
			...prev,
			questions: prev.questions.map((question) =>
				question.id === questionId
					? {
							...question,
							answers: [
								...question.answers,
								{
									id: generateId(),
									title: 'Новый ответ',
									isCorrect: false,
								},
							],
					  }
					: question,
			),
		}));
	};

	return (
		<Accordion.Item eventKey={question.id}>
			<Accordion.Header>
				<span className="me-1">Вопрос № {question.id}</span>
			</Accordion.Header>
			<Accordion.Body>
				<Form.Control
					className="mb-3"
					type="text"
					value={question.title}
					onChange={(e) => handleChangeQuestionTitle(e, question.id)}
				/>
				<div className="d-grid">
					<Button
						variant="danger"
						onClick={() => handleClickDeleteQuestion(question.id)}
					>
						Удалить вопрос
					</Button>
				</div>
				<Form>
					{question.answers.map((answer) => (
						<Answer
							key={answer.id}
							answer={answer}
							setTempData={setTempData}
							questionId={question.id}
						/>
					))}
				</Form>
				<div className="d-grid mt-3">
					<Button
						variant="outline-primary"
						onClick={() => handleClickCreateAnswer(question.id)}
					>
						Добавить ответ
					</Button>
				</div>
			</Accordion.Body>
		</Accordion.Item>
	);
};
