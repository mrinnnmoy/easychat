import React from "react";
import Add from "../img/addAvatar.png";

const Register = () => {

    return (
        <div className="formContainer">
            <div className="formWrapper">
                <span className="logo">EasyChat</span>
                <span className="title">Register</span>
                <form>
                    <input required type="text" placeholder="Enter Name" />
                    <input required type="email" placeholder="Enter Email" />
                    <input required type="password" placeholder="Enter Password" />
                    <input required style={{ display: "none" }} type="file" id="file" />
                    <label htmlFor="file">
                        <img src={Add} alt="" />
                        <span>Add an avatar</span>
                    </label>
                    <button>Sign up</button>
                </form>
                <p>
                    You do have an account? Login
                </p>
            </div>
        </div>
    );
};

export default Register;