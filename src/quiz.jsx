import { Route, Routes } from 'react-router-dom';
import { Container, Spinner } from 'react-bootstrap';
import { useAuth, useError } from './hooks';
import {
	Constructor,
	Login,
	Main,
	MyTests,
	Registration,
	Test,
	TestEdit,
	Testing,
} from './pages';
import { ErrorToast, Header } from './components';

export const Quiz = () => {
	const { closeError, showError, errorMessage, isShowError } = useError();
	const { loading, user, setUser } = useAuth(showError);

	return loading ? (
		<div className="d-flex justify-content-center align-items-center py-5">
			<Spinner animation="border" variant="primary" />
		</div>
	) : (
		<>
			<Header user={user} setUser={setUser} />
			<Container>
				<Routes>
					<Route path="/" element={<Main />} />
					<Route
						path="/login"
						element={<Login user={user} setUser={setUser} />}
					/>
					<Route
						path="/registration"
						element={<Registration user={user} setUser={setUser} />}
					/>
					<Route path="/test/:id" element={<Test />} />
					<Route path="/test/:id/testing" element={<Testing />} />
					<Route path="/test/:id/edit" element={<TestEdit />} />
					<Route path="/my-tests/" element={<MyTests />} />
					<Route path="/constructor" element={<Constructor />} />
					{/* <Route path="/profile" element={<Profile />} /> */}
				</Routes>
			</Container>
			<ErrorToast
				show={isShowError}
				message={errorMessage}
				onClose={closeError}
				variant="primary"
				title="Сообщение"
			/>
		</>
	);
};
