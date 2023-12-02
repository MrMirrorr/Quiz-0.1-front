import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Question } from './components/question';

export const Test = () => {
	const [data, setData] = useState();
	const [questionNumber, setQuestionNumber] = useState(0);

	useEffect(() => {
		fetch('/api/')
			.then((res) => {
				if (res.ok) {
					return res;
				}
				const error =
					res.status === 404
						? 'Такая страница не существует'
						: 'Что-то пошло не так.';
				return Promise.reject(error);
			})
			.then((res) => res.json())
			.then(([res]) => res & setData(res));
	}, []);

	if (!data) {
		return <h1>Loading...</h1>;
	}

	const previousQuestion = () => {
		console.log('Previous');
		setQuestionNumber((prev) => prev - 1);
	};

	const nextQuestion = () => {
		setQuestionNumber((prev) => prev + 1);
	};

	const completeTest = () => {
		console.log('Тест завершен');
	};

	const lastQuestion = !(data.questions.length === questionNumber + 1) ? true : false;

	return (
		<div className="text-center">
			<h1 className="mb-5">Прохождение теста</h1>
			<Question data={data} questionsNum={questionNumber} />
			<div className="my-5">
				<Button
					className="btn btn-primary "
					onClick={() => previousQuestion()}
					disabled={!questionNumber ? true : false}
				>
					Предыдущий вопрос
				</Button>
				{lastQuestion ? (
					<Button
						className="btn btn-primary nextBtn mx-3"
						onClick={() => nextQuestion()}
					>
						Следующий вопрос
					</Button>
				) : (
					<Button
						className="btn btn-primary mx-3"
						onClick={() => completeTest()}
					>
						Завершить тест
					</Button>
				)}
			</div>
		</div>
	);
};
