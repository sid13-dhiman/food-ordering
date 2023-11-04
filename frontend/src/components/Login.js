import React, { useState } from 'react';
import '../css/style.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const [credentials, setCredentials] = useState({ email: '', password: '' });
    const [formEnabled, setFormEnabled] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:5000/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: credentials.email, password: credentials.password }),
        });
        const json = await response.json();

        if (json.success) {
            localStorage.setItem('token', json.authtoken);
            localStorage.setItem('role', json.role); // Save the user's role in local storage

            if (json.role === 'admin') {
                navigate('/admin');
            } else if (json.role === 'merchant') {
                navigate('/category');
            } else {
                alert('You do not have the necessary role to access this page.');
                navigate('/')
            }
        }
    };

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
        setFormEnabled(true);
    };

    return (
        <div className="container mt-3">
            <h2>Login to use Food Ordering</h2>

            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                        Email address
                    </label>
                    <input
                        type="email"
                        className="form-control"
                        onChange={onChange}
                        id="email"
                        name="email"
                        value={credentials.email}
                        aria-describedby="emailHelp"
                    />
                    <div id="emailHelp" className="form-text">
                        We'll never share your email with anyone else.
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                        Password
                    </label>
                    <input
                        type="password"
                        className="form-control"
                        onChange={onChange}
                        id="password"
                        name="password"
                        value={credentials.password}
                    />
                </div>
                <button type="submit" className="btn btn-primary" disabled={!formEnabled}>
                    Login
                </button>
            </form>
        </div>
    );
};

export default Login;
