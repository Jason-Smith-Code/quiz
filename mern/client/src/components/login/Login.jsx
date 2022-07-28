import React, { useState } from 'react';
import {Link} from 'react-router-dom';

const Login = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	async function loginUser(event) {
		event.preventDefault()

		const response = await fetch('http://localhost:5000/user/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				email,
				password,
			}),
		})

		const data = await response.json()

		if (data.user) {
			localStorage.setItem('token', data.user)
			alert('Login successful')
			window.location.href = '/home'
		} else {
			alert('Please check your username and password')
		}
	}

    return(
        <div className="form-container">
            <h1>Login</h1>
            <form className='form-layout' onSubmit={loginUser}>
                <div className="form-group">
                    <label>Email</label>
                    <input value={email} type="email" onChange={(e) => setEmail(e.target.value)}></input>
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input value={password} type="text" onChange={(e) => setPassword(e.target.value)}></input>
                </div>
                <input type="submit" value="Login"></input>
            </form>
            <Link to="/"><button className="link-button middle">Return to main page</button></Link>
        </div>
    )
}

export default Login;