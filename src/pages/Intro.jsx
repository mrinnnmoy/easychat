import React from 'react';
import { FaEnvelope, FaGithub, FaTwitterSquare } from "react-icons/fa";
import "../styles/intro.css";

const Intro = () => {
    return (
        <>
            <nav>
                <a href="/" className="logo">
                    <FaEnvelope className="nav__logo" />
                    <h1>EasyChat</h1>
                </a>
            </nav>

            <header>
                <h1>
                    <span>Securely Communicate</span> <br /> With others
                </h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Excepturi sint perspiciatis maiores quaerat!
                    Rem, veritatis.
                </p>
                <form className="input_div">
                    <span>
                        <FaEnvelope />
                    </span>
                    <input type="email" name="email" placeholder="Sign Up with Email" />
                    <button className="button">Submit</button>
                </form>
            </header>

            <footer>
                <p>
                    Checkout the 
                    <a href="https://github.com/mrinnnmoy/">
                        <FaGithub size={25} />
                        Repository
                    </a>
                </p>
                <p>
                    Follow On
                    <a href="https://twitter.com/mrinnnmoy/" target="_blank" rel='noreferrer'>
                        <FaTwitterSquare size={25} />
                        @mrinnnmoy
                    </a>
                </p>
            </footer>
        </>
    )
};

export default Intro;