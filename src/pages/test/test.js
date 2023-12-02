import { Button, Form } from 'react-bootstrap';

export const Test = () => {
	return (
		<div className="text-center">
			<h1 className="mb-5">Прохождение теста</h1>
			<div className="mb-1">Вопрос 1 из 10</div>
			<div className="mb-5 fs-3 fw-bold">React - это ... ?</div>
			<Form
				className="d-flex flex-column align-items-start m-auto"
				style={{ maxWidth: 400 }}
			>
				<Form.Check
					className="mb-3"
					type="radio"
					name="answer"
					label="библиотека"
					id="id-1"
				/>
				<Form.Check
					className="mb-3"
					type="radio"
					name="answer"
					label="фреймворк"
					id="id-2"
				/>
				<Form.Check
					className="mb-3"
					type="radio"
					name="answer"
					label="приложение"
					id="id-3"
				/>
				<Form.Check
					className="mb-3"
					type="radio"
					name="answer"
					label="не знаю"
					id="id-4"
				/>
			</Form>

			<div className="my-5">
				<Button variant="outline-primary disabled" className="me-3">
					Предыдущий вопрос
				</Button>
				<Button variant="outline-primary disabled">Следующий вопрос</Button>
			</div>

			{/* <h1 className="mb-5">Правильных ответов:</h1>
			<div className="mb-1 fs-3 fw-semibold text-success">8 из 10</div>
			<div className="my-5">
				<Button variant="primary" className="me-3">
					На главную
				</Button>
				<Button variant="primary">Пройти еще раз</Button>
			</div> */}
		</div>
	);
};
