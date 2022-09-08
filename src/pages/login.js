import React from 'react';
import { useState } from 'react';
import {Link} from 'react-router-dom';
import '../styles/login.css';

const Login = () => {
    const [username, setUserName] = useState('');
    const [name, setName] = useState('');
    const [pword, setPword] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showSignup, setShowSignup] = useState(false);
    const BASE_URL = 'https://ecommce-be.herokuapp.com/ecomm/api/v1';
    const toggleSignup = () => {
        setShowSignup(!showSignup);
    }
    function signUp() {
        const data = { username: name, email: email, password: pword };
        console.warn(data);
        fetch(BASE_URL + '/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(data),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                if (data.success) {
                    localStorage.setItem("username", data.data.name)
                    localStorage.setItem("email", data.data.email);
                    localStorage.setItem("password", data.data.pword);
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });

    }
    const login = () => {
        const data = { username: username, password: password };
        console.warn(data);
        fetch(BASE_URL + '/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(data),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                if (data.success) {
                    localStorage.setItem("username", data.data.username)
                    localStorage.setItem("password", data.data.password);
                    localStorage.setItem("token", data.data.token);
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    return (
        <div className='body'>
            <div className='container' >
                <div style={{ backgroundColor: '#dedede' }}><h1 className='label'>User Login</h1>
                    {
                        !showSignup ? (
                            <div className='login_form'>
                                <div className='font'>Username</div>
                                <input type='text' id='username' value={username} onChange={(e) => setUserName(e.target.value)} />
                                <div className='font2'>Password</div>
                                <input type='password' id='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                        {/*<button type='submit' className='submit' onClick={login}>Login</button>*/}
                                   <Link to="/home" className='btn btn-primary submit' onClick={login}>Login</Link>
                                <div className='signup' onClick={toggleSignup}>Dont have an account? <span className='btn btn-Link' style={{ padding: '4px' }}> SignUp</span></div>
                            </div>) : (
                            <div className='login_form'>
                                <div className='font'>Username</div>
                                <input type='text' id='name' value={name} onChange={(e) => setName(e.target.value)} />
                                <div className='font3'>Email</div>
                                <input type='email' id='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                                <div className='font2'>Password</div>
                                <input type='password' id='pword' value={pword} onChange={(e) => setPword(e.target.value)} />

                                <button type='submit' className='submit' onClick={signUp}>SignUp</button>
                                <div className='signup' onClick={toggleSignup}>Sign in as user ? <span className='btn btn-Link' style={{ padding: '4px' }}> Login</span></div>
                            </div>

                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Login
