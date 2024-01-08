import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Accordion, Button } from 'react-bootstrap';
import { generateId } from '../../utils';
import { Question } from '../../components';
import { createTestRequest } from '../../api';

const initialTest = {
	title: 'Новый тест',
	questions: [],
};

export const Constructor = () => {
	const navigate = useNavigate();
	const [tempData, setTempData] = useState(initialTest);

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

	const handleClickCreateTest = (body) => {
		createTestRequest(body).then((data) => {
			console.log(data);
			navigate('/');
		});
	};

	return (
		<div className="text-center">
			<h1 className="mb-5">Создание теста</h1>
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
				<Button variant="success" onClick={() => handleClickCreateTest(tempData)}>
					Сохранить
				</Button>
			</div>
		</div>
	);
};
