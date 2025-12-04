import React from 'react';
import SignupForm from './SignupForm';
import '../SignupPage.css';

const SignupPage = ({ onToggleForm }) => {
    return (
        <div className="signup-page">
            <main>
                <SignupForm onToggleForm={onToggleForm} />
            </main>
        </div>
    );
};

export default SignupPage;
