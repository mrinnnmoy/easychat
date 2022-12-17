import React from "react";

const Login = () => {

    return (
        <div className="formContainer">
            <div className="formWrapper">
                <span className="logo">EasyChat</span>
                <span className="title">Log In</span>
                <form>
                    <input required type="email" placeholder="Enter Email" />
                    <input required type="password" placeholder="Enter Password" />
                    <button>Log In</button>
                </form>
                <p>
                    You don't have an account? Sign Up
                </p>
            </div>
        </div>
    );
};

export default Login;