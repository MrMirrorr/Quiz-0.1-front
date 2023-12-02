import { useEffect, useState } from 'react';
import { Button, ProgressBar } from 'react-bootstrap';

export const Main = () => {
	const [data, setData] = useState(null);

	useEffect(() => {
		fetch('/api/').then(async (res) => setData(await res.json()));
	}, []);

	console.log(data);
	return (
		<div className="text-center">
			<h1 className="mb-5">Главная страница</h1>
			<div className="buttons"></div>
			<div className="mb-5">
				<Button variant="outline-primary" className="me-3">
					Запустить тест
				</Button>
				<Button variant="outline-primary">Редактировать тест</Button>
			</div>
			<div>
				<h4 className="mb-3 text-start">История прохождений</h4>
				<p>{!data ? 'Loading...' : `${data[0]}`}</p>
				<div>
					<div className="d-flex justify-content-between align-items-center gap-4 px-3 py-1 border border-info rounded">
						<div className="date">
							<div className="date-top">01.01.2024</div>
							<div className="date-bottom">16:46:37</div>
						</div>
						<div className="d-flex align-items-center flex-grow-1">
							<span>0</span>
							<ProgressBar now={50} className="flex-grow-1 mx-2" />
							<span>10</span>
						</div>
						<div>Верно: 5 из 10</div>
					</div>
				</div>
			</div>
		</div>
	);
};
