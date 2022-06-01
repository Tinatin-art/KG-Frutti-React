import React from 'react';
import { Link } from 'react-router-dom'
// import facebook from "../../assets/icons/facebook.svg";
// import google from "../../assets/icons/google.svg";

import AuthForm from './AuthForm';
function Account() {

    return (
    <>
        <div className="account">
            <Link to="/" className="back">Back</Link>
            <div className="account__inner">
                {/* <div className="block block1">
                    <h1>Login</h1>
                    <div className="facebook">
                        <span>with</span>
                        <img src={facebook} alt="facebook"/>
                    </div>
                    <div className="google">
                        <span>or</span>
                        <img src={google} alt="google"/>
                    </div>
                </div> */}
                <div className="block block2">
                    <AuthForm/>
                </div>
                {/* <div className="block block3">
                    <h3>Dont have an account?</h3>
                    <Link to="#">Register</Link>
                </div> */}
            </div> 
        </div>
    </>
  )
}

export default Account;
