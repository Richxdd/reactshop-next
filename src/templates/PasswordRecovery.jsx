import React from 'react';
import '@styles/PasswordRecovery.scss';
import logo from '@logos/logo_yard_sale.svg'

const PasswordRecovery = () => {
	return (
		<div className="PasswordRecovery">
			<div className="PasswordRecovery-container">
				<img src={logo} alt="logo" className="logo" />
				<h1 className="titulo">Recuperar Contraseña</h1>
				<p className="subtitle2">Informar la dirección de correo utilizada para crear su cuenta</p>
				<form action="/send-email" className="form">
					<label htmlFor="email" className="label">Dirección de correo electrónico</label>
					<input type="text" id="email" className="input input-email" />
					<input type="submit" value="Confirmar" className="primary-button login-button" />
				</form>
			</div>
		</div>
	);
}

export default PasswordRecovery;
