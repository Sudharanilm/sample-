import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
    const [input, setInput] = useState({})

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setInput(values => ({ ...values, [name]: value }))
    }

    const Navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (Object.entries(input).length !== 2 || input.name === " " || input.password === " ") {
            alert("Username and password connot be empty");
            return false
        }
        localStorage.setItem('login', true);
        localStorage.setItem('userDetails', JSON.stringify(input))
        Navigate('/')
    }
    useEffect(() => {
        let login = localStorage.getItem('login');
        if (login) {
            Navigate('/')
        }
    });

    return (
        <div>
            <h1>login page</h1>
            <input type="text" name="username" placeholder='username' onChange={handleChange} required />
            <input type="password" name="password" placeholder="password" onChange={handleChange} required />
            <input type="submit" onClick={handleSubmit} />
            <button> <Link to="/Details">login</Link></button>
        </div>
    )
}

export default Login;