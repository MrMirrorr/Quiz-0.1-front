import { Accordion, Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const TestEdit = () => {
	return (
		<div className="text-center">
			<h1>Редактирование теста</h1>
			<Accordion className="text-start">
				<Accordion.Item eventKey="0" className="mb-3">
					<Accordion.Header>Вопрос №1</Accordion.Header>
					<Accordion.Body>
						<div className="d-grid">
							<Button variant="danger">Удалить вопрос</Button>
						</div>
						<Form>
							<div className="d-flex align-items-center gap-3 mt-3">
								<Form.Control as="textarea" value="библиотека" rows={3} />
								<div className="d-flex flex-column align-items-center justify-content-center gap-2">
									<Form.Check
										type="radio"
										aria-label="radio 1"
										name="answer"
									/>
									<Button variant="danger">X</Button>
								</div>
							</div>
							<div className="d-flex align-items-center gap-3 mt-3">
								<Form.Control as="textarea" value="фреймворк" rows={3} />
								<div className="d-flex flex-column align-items-center justify-content-center gap-2">
									<Form.Check
										type="radio"
										aria-label="radio 1"
										name="answer"
									/>
									<Button variant="danger">X</Button>
								</div>
							</div>
							<div className="d-flex align-items-center gap-3 mt-3">
								<Form.Control as="textarea" value="приложение" rows={3} />
								<div className="d-flex flex-column align-items-center justify-content-center gap-2">
									<Form.Check
										type="radio"
										aria-label="radio 1"
										name="answer"
									/>
									<Button variant="danger">X</Button>
								</div>
							</div>
							<div className="d-flex align-items-center gap-3 mt-3">
								<Form.Control as="textarea" value="не знаю" rows={3} />
								<div className="d-flex flex-column align-items-center justify-content-center gap-2">
									<Form.Check
										type="radio"
										aria-label="radio 1"
										name="answer"
									/>
									<Button variant="danger">X</Button>
								</div>
							</div>
							<div className="d-flex align-items-center gap-3 mt-3">
								<Form.Control
									as="textarea"
									rows={3}
									placeholder="Добавить ответ"
								/>
								<div className="d-flex flex-column align-items-center justify-content-center gap-2">
									<Form.Check
										type="radio"
										aria-label="radio 1"
										name="answer"
									/>
									<Button variant="danger">X</Button>
								</div>
							</div>
						</Form>
						<div className="d-grid mt-3">
							<Button variant="outline-primary">Добавить ответ</Button>
						</div>
					</Accordion.Body>
				</Accordion.Item>
			</Accordion>
			<div className="d-grid">
				<Button variant="outline-primary">Добавить вопрос</Button>
			</div>
			<div className="my-5">
				<Link to="/">
					<Button variant="outline-primary" className="me-3">
						Назад
					</Button>
				</Link>
				<Button variant="success">Сохранить</Button>
			</div>
		</div>
	);
};
