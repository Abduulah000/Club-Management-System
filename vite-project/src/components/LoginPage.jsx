import React from 'react';
import LoginForm from './LoginForm';
import '../LoginPage.css';

const LoginPage = ({ onToggleForm }) => { 
    return (
        <div className="login-page">
            <LoginForm onToggleForm={onToggleForm} />
        </div>
    );
};

export default LoginPage;
