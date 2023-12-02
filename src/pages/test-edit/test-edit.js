import { Accordion, Button, Form } from 'react-bootstrap';

export const TestEdit = () => {
	return (
		<div className="text-center">
			<h1>Редактирование теста</h1>
			<Accordion className="text-start">
				<Accordion.Item eventKey="0">
					<Accordion.Header>Вопрос №1</Accordion.Header>
					<Accordion.Body>
						<div className="d-grid">
							<Button variant="outline-primary">+</Button>
						</div>
						<Form>
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
						</Form>
					</Accordion.Body>
				</Accordion.Item>
			</Accordion>
			<div className="my-5">
				<Button variant="outline-primary" className="me-3">
					Назад
				</Button>
				<Button variant="success">Сохранить</Button>
			</div>
		</div>
	);
};
