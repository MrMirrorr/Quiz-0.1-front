import { Container, Dropdown } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { logoutRequest } from '../../api';
import { ErrorToast } from '../../components';
import { useError } from '../../hooks';

export const Header = ({ user, setUser }) => {
	const navigate = useNavigate();
	const { closeError, showError, errorMessage, isShowError } = useError();

	const handleLogout = async () => {
		const dataFromServer = await logoutRequest();

		if (dataFromServer.error) {
			showError(dataFromServer.error);
		} else {
			setUser(null);
			navigate('/');
		}
	};

	return (
		<div className="py-2 bg-secondary">
			<Container>
				<div className="d-flex justify-content-between align-items-center">
					<nav>
						<Link to="/" className="btn btn-primary">
							Главная
						</Link>
						{user && (
							<Link to="/my-tests" className="btn btn-primary ms-3">
								Мои тесты
							</Link>
						)}
					</nav>
					{user ? (
						<Dropdown>
							<Dropdown.Toggle
								className="p-0 pe-2 d-flex align-items-center"
								variant="info"
								id="dropdown-basic"
							>
								<img src="/icons/user.svg" alt="User" width={50} />
								{user.fullName}
							</Dropdown.Toggle>

							<Dropdown.Menu className="bg-info w-100">
								<Dropdown.Item onClick={() => navigate('/profile')}>
									Настроить
								</Dropdown.Item>
								<Dropdown.Item onClick={handleLogout}>
									Выход
								</Dropdown.Item>
							</Dropdown.Menu>
						</Dropdown>
					) : (
						<Link to="/login" className="btn btn-primary">
							Войти
						</Link>
					)}
				</div>
			</Container>
			<ErrorToast
				show={isShowError}
				message={errorMessage}
				onClose={closeError}
				variant="danger"
				title="Ошибка"
			/>
		</div>
	);
};
