import ProgressBar from 'react-bootstrap/ProgressBar';
import { amountOfCorrect, formatTimestamp, percentageOfCorrect } from '../../../utils';

export const History = () => {
	const history = JSON.parse(localStorage.getItem('results')) || [];

	return history.map(({ timestamp, progress }) => (
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
	));
};
