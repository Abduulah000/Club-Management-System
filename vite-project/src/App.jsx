
import React, { useState } from 'react';
import Navbar from "./components/Navbar";
import LoginPage from './components/LoginPage'; 
import SignupForm from './components/SignupForm'; 

// Define constants for form states
const FORM_STATE = {
    HIDDEN: 'hidden',
    LOGIN: 'login',
    SIGNUP: 'signup'
};

function App() {
  // State to track which form should be displayed
  const [formState, setFormState] = useState(FORM_STATE.HIDDEN);

  // Function to open the LOGIN form (used by Navbar's "JOIN" button)
  const openLogin = () => {
    setFormState(FORM_STATE.LOGIN);
  };
  
  // Function to switch between LOGIN and SIGNUP forms
  const toggleForm = () => {
    setFormState(prev => (prev === FORM_STATE.LOGIN ? FORM_STATE.SIGNUP : FORM_STATE.LOGIN));
  };
  
  // Conditionally render the correct component
  const renderForm = () => {
      if (formState === FORM_STATE.LOGIN) {
          // Pass the toggle function to the Login page (used by the 'Sign Up' link)
          return <LoginPage onToggleForm={toggleForm} />; 
      }
      if (formState === FORM_STATE.SIGNUP) {
          // Pass the toggle function to the Signup page (used by the 'Sign In' link)
          return <SignupForm onToggleForm={toggleForm} />; 
      }
      return null; // Hidden
  }


  return (
    <div className="App">
      
      {/* 2. Pass the OPEN LOGIN function to the Navbar's "JOIN" button */}
      <Navbar onJoinClick={openLogin} />
      
      {/* 3. Render the selected form */}
      {renderForm()}
      
    </div>
  );
}

export default App;