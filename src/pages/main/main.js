import { Button, ProgressBar } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { amountOfCorrect, formatTimestamp, percentageOfCorrect } from '../../utils';

export const Main = () => {
	const navigate = useNavigate();
	const history = JSON.parse(localStorage.getItem('results')) || [];

	return (
		<div className="text-center">
			<h1 className="mb-5">Главная страница</h1>
			<div className="buttons"></div>
			<div className="mb-5">
				<Button
					variant="outline-primary"
					className="me-3"
					onClick={() => navigate('/test')}
				>
					Запустить тест
				</Button>
				<Link to="/test-edit">
					<Button variant="outline-primary">Редактировать тест</Button>
				</Link>
			</div>
			<div>
				<h4 className="mb-3 text-start">История прохождений</h4>
				{history.map(({ timestamp, progress }) => (
					<div key={timestamp} className="mb-3">
						<div className="d-flex justify-content-between align-items-center gap-4 px-3 py-1 border border-info rounded">
							<div className="date">
								<div className="date-top">
									{formatTimestamp(timestamp).formattedDate}
								</div>
								<div className="date-bottom">
									{formatTimestamp(timestamp).formattedTime}
								</div>
							</div>
							<div className="d-flex align-items-center flex-grow-1">
								<span>0</span>
								<ProgressBar
									now={percentageOfCorrect(progress)}
									className="flex-grow-1 mx-2"
								/>
								<span>{progress.length}</span>
							</div>
							<div>
								Верно: {amountOfCorrect(progress)} из {progress.length}
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};
