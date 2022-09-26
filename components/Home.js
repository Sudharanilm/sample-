import React from 'react'
import { useNavigate, Link } from 'react-router-dom'

const Home = () => {
    const redirect = useNavigate();
    const logout = () => {
        localStorage.clear();
        redirect('/login')
    }
    return (
        <div>
            <h1>Home page</h1>
            <Link to="/"><button>login</button></Link>
            <button onClick={logout}>logout</button>
        </div>
    )
}

export default Home