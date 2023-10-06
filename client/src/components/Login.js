import React, { useEffect, useState } from "react";
import LoginForm from "./LoginForm"
import SignUpForm from "./SignupForm"

function Login( {onLoginComplete} ) {
    const [showLogin, setShowLogin] = useState(true);


  
    return (
      <>
        {showLogin ? (
          <>
            <LoginForm onLoginComplete = {onLoginComplete} />
          
            <p>
              Don't have an account? &nbsp;
              <button color="secondary" onClick={() => setShowLogin(false)}>
                Sign Up
              </button>
            </p>
          </>
        ) : (
          <>
            <SignUpForm onLoginComplete = {onLoginComplete} />
          
            <p>
              Already have an account? &nbsp;
              <button color="secondary" onClick={() => setShowLogin(true)}>
                Log In
              </button>
            </p>
          </>
        )}
      </>
    );
  }

export default Login;