import * as yup from 'yup';

export const loginFormScheme = yup.object().shape({
	email: yup.string().required('Заполните почту').email('Не валидная почта'),
	password: yup
		.string()
		.required('Заполните пароль')
		.matches(
			/^[\w#%]+$/,
			'Неверно заполнен пароль. Допускаются буквы, цифры и символы # %',
		)
		.min(6, 'Слишком короткий пароль. Минимум 6 символов.')
		.max(30, 'Слишком длинный пароль. Максимум 30 символов.'),
});
