import React from 'react';
import '@styles/SendEmail.scss';
import logo from '@logos/logo_yard_sale.svg';
import email from '@icons/email.svg';

const SendEmail = () => {
	return (
		<div className="SendEmail">
			
			<div className="form-container2">
				<img src={logo} alt="logo" className="logo" />
				<h1 className="title2">El correo ha sido enviado</h1>
				<p className="subtitle2">Consulte su bandeja de entrada para obtener instrucciones sobre cómo restablecer la contraseña</p>
				<div className="email-image">
					<img src={email} alt="email" />
				</div>
				<a href="/login" className="btn">
				<button className="primary-button login-button" >Iniciar sesión</button>
				</a>
				<p className="resend">
					<span>¿No recibiste el correo electrónico?</span>
					<a href="/password-recovery">Reenviar</a>
				</p>
			</div>
		</div>
	);
}

export default SendEmail;
