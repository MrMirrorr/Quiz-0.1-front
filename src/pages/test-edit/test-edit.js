import { useEffect, useState } from 'react';
import { Accordion, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useGetTest } from '../../hooks';
import { Question } from './components';
import { generateId } from './utils';
import { updateTest } from '../../api';

export const TestEdit = () => {
	const navigate = useNavigate();
	const data = useGetTest();
	const [tempData, setTempData] = useState(null);

	useEffect(() => {
		if (data) {
			const formattedQuestions = data.questions.map((question) => ({
				id: question._id,
				title: question.title,
				answers: question.answers.map((answer) => ({
					id: answer._id,
					title: answer.title,
					isCorrect: answer.isCorrect,
				})),
			}));

			setTempData({
				id: data._id,
				title: data.title,
				questions: formattedQuestions,
			});
		}
	}, [data]);

	const handleClickCreateQuestion = () => {
		setTempData((prev) => ({
			...prev,
			questions: [
				...prev.questions,
				{
					id: generateId(),
					title: 'Новый вопрос',
					answers: [],
				},
			],
		}));
	};

	const handleClickUpdateTest = (testId, body) => {
		updateTest(testId, body).then((data) => navigate('/'));
	};

	if (!data) {
		return <h1 className="text-center">Loading...</h1>;
	}

	return (
		<div className="text-center">
			<h1 className="mb-5">Редактирование теста</h1>
			<Accordion className="text-start">
				{tempData &&
					tempData.questions.map((question) => (
						<Question
							key={question.id}
							question={question}
							setTempData={setTempData}
						/>
					))}
			</Accordion>
			<div className="d-grid mt-3">
				<Button variant="primary" onClick={handleClickCreateQuestion}>
					Добавить вопрос
				</Button>
			</div>
			<div className="my-5">
				<Link to="/">
					<Button variant="outline-primary" className="me-3">
						Назад
					</Button>
				</Link>
				<Button
					variant="success"
					onClick={() => handleClickUpdateTest(data._id, tempData)}
				>
					Сохранить
				</Button>
			</div>
		</div>
	);
};
