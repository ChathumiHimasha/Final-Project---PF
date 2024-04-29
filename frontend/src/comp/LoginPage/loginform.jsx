import React from 'react';
import './LoginForm.css';
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";

const LoginForm = () => {
    
    const handleLogin = async (event) => {
        event.preventDefault();
        
        const username = event.target.elements.username.value;
        const password = event.target.elements.password.value;
    
        try {
            const response = await fetch('http://localhost:8080/users');
            if (!response.ok) {
                throw new Error('Failed to fetch user data');
            }
            const users = await response.json();
    
            // Check if any user with the provided username exists
            const user = users.find(user => user.username === username);
    
            // If a user with the provided username is found and the password matches, navigate to '/shop'
            if (user && user.password === password) {
                window.location.href = '/shop';
            } else {
                alert('Invalid username or password');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Failed to authenticate. Please try again later.');
        }
    };
    

    return (
        <div className='container'>
            <div className='wrapper'>
                <form onSubmit={handleLogin}>
                    <h1>Login</h1>
                    <div className="input-box">
                        <input type="text" name="username" placeholder='Username' required />
                        <FaUser className='icon' />
                    </div>
                    <div className="input-box">
                        <input type="password" name="password" placeholder='Password' required />
                        <FaLock className='icon' />
                    </div>

                    <div className="remember-forgot">
                        <label><input type="checkbox" />Remember me</label>
                        <a href="#">Forgot password?</a>
                    </div>
                    <div>
                        <button type="submit">Login</button>
                    </div>
                    <div className="register-link">
                        <p>Don't have an account? <a href="/signup">Register</a></p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginForm;
