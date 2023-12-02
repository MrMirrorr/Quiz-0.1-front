import { Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { Main, Test, TestEdit } from './pages';

export const Quiz = () => {
	return (
		<Container>
			<Routes>
				<Route path="/" element={<Main />} />
				<Route path="/test" element={<Test />} />
				<Route path="/test-edit" element={<TestEdit />} />
			</Routes>
		</Container>
	);
};
