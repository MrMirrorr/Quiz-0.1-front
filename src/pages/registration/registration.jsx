import { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { registerFormScheme } from '../../form-validation-schemes';
import { yupResolver } from '@hookform/resolvers/yup';
import { registerRequest } from '../../api';
import { Alert, Button, FloatingLabel, Form } from 'react-bootstrap';

export const Registration = ({ user, setUser }) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues: {
			fullName: '',
			email: '',
			password: '',
			confirmPassword: '',
		},
		resolver: yupResolver(registerFormScheme),
	});

	const [serverError, setServerError] = useState(null);

	const handleSubmitForm = async (formData) => {
		const userDataFromServer = await registerRequest(formData);
		if (userDataFromServer.error) {
			setServerError(userDataFromServer.error);
		} else {
			setUser(userDataFromServer);
		}
	};

	const formError =
		errors?.fullName?.message ||
		errors?.email?.message ||
		errors?.password?.message ||
		errors?.confirmPassword?.message;

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
			<FloatingLabel className="mb-3" controlId="fullName" label="Полное имя">
				<Form.Control
					className="border-info"
					type="text"
					placeholder="Полное имя"
					{...register('fullName', {
						onChange: () => setServerError(null),
					})}
				/>
			</FloatingLabel>

			<FloatingLabel className="mb-3" controlId="email" label="Электронная почта">
				<Form.Control
					className="border-info"
					type="email"
					placeholder="Электронная почта"
					{...register('email', {
						onChange: () => setServerError(null),
					})}
				/>
			</FloatingLabel>

			<FloatingLabel controlId="password" label="Пароль">
				<Form.Control
					className="mb-3 border-info"
					type="password"
					placeholder="Пароль"
					{...register('password', {
						onChange: () => setServerError(null),
					})}
				/>
			</FloatingLabel>

			<FloatingLabel controlId="confirmPassword" label="Повторить пароль">
				<Form.Control
					className="border-info"
					type="password"
					placeholder="Повторить пароль"
					{...register('confirmPassword', {
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
				Зарегистрироваться
			</Button>

			<div>
				Нет аккаунта? <Link to="/registration">Зарегистрироваться</Link>
			</div>
		</Form>
	);
};
