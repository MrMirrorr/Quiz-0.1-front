import { Toast, ToastContainer } from 'react-bootstrap';

export const ErrorToast = ({ show, message, onClose, variant, title }) => {
	return (
		<ToastContainer position="bottom-end" className="p-3">
			<Toast onClose={onClose} show={show} delay={3000} autohide bg={variant}>
				<Toast.Header>
					<strong className="me-auto">{title}</strong>
				</Toast.Header>
				<Toast.Body className="text-light">{message}</Toast.Body>
			</Toast>
		</ToastContainer>
	);
};
