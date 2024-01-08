import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Question } from './components/question';
import { Link } from 'react-router-dom';
import { amountOfCorrect, generateProgress, rewriteLocalStorage } from '../../utils';

export const Testing = () => {
	const [questionNumber, setQuestionNumber] = useState(0);
	const [value, setValue] = useState('');
	const [testing, setTesting] = useState({});
	const [results, setResults] = useState([]);

	const data = null;

	if (!data) {
		return <h1 className="text-center">Loading...</h1>;
	}

	const questionsLength = data.questions.length;
	const firstQuestion = questionNumber === 0 ? true : false;
	const lastQuestion = questionNumber === questionsLength - 1 ? true : false;

	const previousQuestion = () => {
		setQuestionNumber((prev) => prev - 1);
	};

	const nextQuestion = () => {
		setQuestionNumber((prev) => prev + 1);
	};

	const completeTest = () => {
		const progress = generateProgress(data, testing);
		setResults(progress);
		rewriteLocalStorage(progress);
	};

	const resetTest = () => {
		setQuestionNumber(0);
		setValue('');
		setTesting({});
		setResults([]);
	};

	return results.length ? (
		<div className="text-center">
			<h1 className="mb-5">Правильных ответов:</h1>
			<div className="fs-2 text-success">
				{amountOfCorrect(results)} из {questionsLength}
			</div>

			<div className="my-5">
				<Link to="/">
					<Button variant="outline-primary" className="me-3">
						На главную
					</Button>
				</Link>
				<Button variant="outline-success" onClick={() => resetTest()}>
					Пройти еще раз
				</Button>
			</div>
		</div>
	) : (
		<div className="text-center">
			<h1 className="mb-5">Прохождение теста</h1>
			<Question
				data={data}
				questionNumber={questionNumber}
				value={value}
				setValue={setValue}
				setTesting={setTesting}
				testing={testing}
				questionsLength={questionsLength}
			/>
			<div className="my-5">
				<Button
					variant="primary"
					className="me-3"
					disabled={firstQuestion}
					onClick={() => previousQuestion()}
				>
					Предыдущий вопрос
				</Button>
				{!lastQuestion ? (
					<Button
						variant="primary"
						disabled={!value}
						onClick={() => nextQuestion()}
					>
						Следующий вопрос
					</Button>
				) : (
					<Button
						variant="success"
						disabled={!value}
						onClick={() => completeTest()}
					>
						Завершить тест
					</Button>
				)}
			</div>
		</div>
	);
};
