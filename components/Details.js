import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const Details = () => {
    const [user, setUser] = useState({})
    const Navigate = useNavigate()
    const location = useLocation()

    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem('userDetails')))
    }, []);
    const showDetails = () => {
        if (location.state !== null) {
            const { name, password } = location.state
            return (
                <>
                    <h3>{name}</h3>
                    <h3>{password}</h3>
                </>
            )
        }
    }
    console.log(location.state);
    return (
        <div>Details</div>
    )
}

export default Details