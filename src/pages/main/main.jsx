import { Card, Col, Pagination, Row, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ErrorToast } from '../../components';
import { useError, useTests } from '../../hooks';

export const Main = () => {
	const { closeError, showError, errorMessage, isShowError } = useError();
	const { loading, tests } = useTests(showError);

	let active = 1;
	let items = [];
	for (let number = 1; number <= 5; number++) {
		items.push(
			<Pagination.Item key={number} active={number === active}>
				{number}
			</Pagination.Item>,
		);
	}

	return (
		<>
			<h1>Все тесты</h1>
			{loading ? (
				<div className="d-flex justify-content-center align-items-center py-5">
					<Spinner animation="border" variant="primary" />
				</div>
			) : (
				<Row xs={2} md={4} className="g-2 my-5">
					{tests.map((test) => (
						<Col key={test.id}>
							<Card className="border border-info">
								<Card.Header className="border-info">
									{test.title}
								</Card.Header>
								<Card.Body>
									<Card.Text>
										Количество вопросов {test.questions.length}
									</Card.Text>
									<Card.Text>Автор теста: {test.author}</Card.Text>
									<Card.Text>Дата создания: {test.createdAt}</Card.Text>
									<Link
										className="d-block btn btn-primary"
										to={`/test/${test.id}`}
									>
										Открыть
									</Link>
								</Card.Body>
							</Card>
						</Col>
					))}
				</Row>
			)}

			<Pagination className="justify-content-center">{items}</Pagination>

			<ErrorToast
				show={isShowError}
				message={errorMessage}
				onClose={closeError}
				variant="danger"
				title="Ошибка"
			/>
		</>
	);
};
