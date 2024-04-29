import React, { useState } from 'react';
import './SignupForm.css';
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";

const SignupForm = () => {
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!name || !username || !email || !password || !confirmPassword) {
            setError('Please fill in all fields.');
            return;
        }
        
        if (password !== confirmPassword) {
            setError('Passwords do not match.');
            return;
        }

        // Prepare the user data to be sent to the server
        const userData = {
            name,
            username,
            email,
            password
        };

        try {
            const response = await fetch('http://localhost:8080/users/add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userData)
            });

            if (!response.ok) {
                throw new Error('Failed to sign up');
            }

            // Reset form fields and error state upon successful signup
            setName('');
            setUsername('');
            setEmail('');
            setPassword('');
            setConfirmPassword('');
            setError('');
            // Redirect to login page or perform any other action upon successful signup
            // Example: window.location.href = '/login';
        } catch (error) {
            setError('Failed to sign up. Please try again later.');
            console.error('Error:', error);
        }
        
    };

    return (
        <div className='wrapper'>
            <form onSubmit={handleSubmit}>
                <h1>Sign Up</h1>
                {error && <div className="error">{error}</div>}
                <div className="input-box">
                    <input type="text" placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} required />
                    <FaUser className='icon' />
                </div>
                <div className="input-box">
                    <input type="text" placeholder='Username' value={username} onChange={(e) => setUsername(e.target.value)} required />
                    <FaUser className='icon' />
                </div>
                <div className="input-box">
                    <input type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} required />
                    <FaEnvelope className='icon' />
                </div>
                <div className="input-box">
                    <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} required />
                    <FaLock className='icon' />
                </div>
                <div className="input-box">
                    <input type="password" placeholder='Confirm Password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
                    <FaLock className='icon' />
                </div>
                <button type="submit">Sign Up</button>
                <div className="register-link">
                    <p>Already have an account? <a href="/">Login</a></p>
                </div>
            </form>
        </div>
    );
};

export default SignupForm;