import { Alert, Button, Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const MyTests = () => {
	const testId = 'testId';

	const amountQuestions = 10;
	const date = '25.12.2023';

	const isAuth = true;

	const handleClickDeleteTest = () => {};

	return isAuth ? (
		<>
			<div className="d-flex justify-content-between align-items-center">
				<h1>Мои тесты</h1>
				<Link className="btn btn-primary" to="/constructor">
					Создать тест
				</Link>
			</div>
			<Row xs={2} md={4} className="g-2 my-5">
				{Array.from({ length: 8 }).map((_, idx) => (
					<Col key={idx}>
						<Card className="border border-info">
							<Card.Header className="border-info">
								Название теста {idx + 1}
							</Card.Header>
							<Card.Body>
								<Card.Text>
									Количество вопросов {amountQuestions}
								</Card.Text>
								<Card.Text>Дата создания: {date}</Card.Text>
								<Link
									className="d-block btn btn-primary"
									to={`/test/${testId}`}
								>
									Открыть
								</Link>
								<Link
									className="d-block btn btn-info my-1"
									to={`/test/${testId}/edit`}
								>
									Редактировать
								</Link>
								<Button
									className="d-block w-100"
									variant="danger"
									onClick={handleClickDeleteTest}
								>
									Удалить
								</Button>
							</Card.Body>
						</Card>
					</Col>
				))}
			</Row>
		</>
	) : (
		<Alert variant="warning">Нет доступа</Alert>
	);
};
