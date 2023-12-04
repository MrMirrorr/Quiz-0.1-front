import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Question } from './components/question';
import { useNavigate } from 'react-router-dom';

export const Test = () => {
	const [data, setData] = useState();
	const [value, setValue] = useState();
	const [testing, setTesting] = useState({});
	const [isChecked, setIsChecked] = useState(false);
	const [questionNumber, setQuestionNumber] = useState(0);
	const navigate = useNavigate();

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

	const questionsLength = data.questions.length;

	const previousQuestion = () => {
		setQuestionNumber((prev) => prev - 1);
		setIsChecked(false);
	};

	const nextQuestion = () => {
		setQuestionNumber((prev) => prev + 1);
		setIsChecked(false);
		console.log(testing);
	};

	const completeTest = () => {
		localStorage.setItem(`${Date.now()}`, JSON.stringify(testing));
		navigate('/');
		console.log('Тест завершен');
	};

	const lastQuestion = !(questionsLength === questionNumber + 1) ? true : false;

	return (
		<div className="text-center">
			<h1 className="mb-5">Прохождение теста</h1>
			<Question
				data={data}
				questionNumber={questionNumber}
				value={value}
				setValue={setValue}
				setIsChecked={setIsChecked}
				setTesting={setTesting}
				testing={testing}
				questionsLength={questionsLength}
			/>
			<div className="my-5">
				<Button
					className="btn btn-primary "
					disabled={!questionNumber || !isChecked ? true : false}
					onClick={() => previousQuestion()}
				>
					Предыдущий вопрос
				</Button>
				{lastQuestion ? (
					<Button
						className="btn btn-primary nextBtn mx-3"
						disabled={!isChecked}
						onClick={() => nextQuestion()}
					>
						Следующий вопрос
					</Button>
				) : (
					<Button
						className="btn btn-primary mx-3"
						disabled={!isChecked}
						onClick={() => completeTest()}
					>
						Завершить тест
					</Button>
				)}
			</div>
		</div>
	);
};
