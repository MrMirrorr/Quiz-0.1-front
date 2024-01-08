import { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { loginFormScheme } from '../../form-validation-schemes';
import { loginRequest } from '../../api';
import { Alert, Button, FloatingLabel, Form } from 'react-bootstrap';

export const Login = ({ user, setUser }) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues: {
			email: '',
			password: '',
		},
		resolver: yupResolver(loginFormScheme),
	});

	const [serverError, setServerError] = useState(null);

	const handleSubmitForm = async (formData) => {
		const userDataFromServer = await loginRequest(formData);
		if (userDataFromServer.error) {
			setServerError(userDataFromServer.error);
		} else {
			setUser(userDataFromServer);
		}
	};

	const formError = errors?.email?.message || errors?.password?.message;
	const errorMessage = formError || serverError;

	if (user) {
		return <Navigate to="/" />;
	}

	return (
		<Form
			className="mx-auto mt-5 p-3 text-center border border-primary rounded"
			style={{ minWidth: '300px', maxWidth: '400px' }}
			onSubmit={handleSubmit(handleSubmitForm)}
		>
			<FloatingLabel
				className="mb-3"
				controlId="floatingInput"
				label="Электронная почта"
			>
				<Form.Control
					className="border-info"
					type="email"
					placeholder="name@example.com"
					{...register('email', {
						onChange: () => setServerError(null),
					})}
				/>
			</FloatingLabel>
			<FloatingLabel controlId="floatingPassword" label="Пароль">
				<Form.Control
					className="border-info"
					type="password"
					placeholder="Password"
					{...register('password', {
						onChange: () => setServerError(null),
					})}
				/>
			</FloatingLabel>
			{errorMessage && (
				<Alert variant="danger" className="mt-3 mb-0">
					{errorMessage}
				</Alert>
			)}
			<Button className="my-3 px-5" type="submit" disabled={errorMessage}>
				Войти
			</Button>
			<div>
				Нет аккаунта? <Link to="/registration">Зарегистрироваться</Link>
			</div>
		</Form>
	);
};
