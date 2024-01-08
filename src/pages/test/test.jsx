import { History } from './components/question';
import { Link } from 'react-router-dom';

export const Test = () => {
	const testId = 'testId';

	const testTitle = 'Название теста';
	const amountQuestions = 10;
	const author = 'Станислав';
	const date = '25.12.2023';

	return (
		<div className="my-5">
			<h1>{testTitle}</h1>
			<p>Количество вопросов: {amountQuestions}</p>
			<p>Автор теста: {author}</p>
			<p>Дата создания: {date}</p>
			<Link className="mb-5 btn btn-primary" to={`/test/${testId}/testing`}>
				Запустить тест
			</Link>
			<History />
		</div>
	);
};
