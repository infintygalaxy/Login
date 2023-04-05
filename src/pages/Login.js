//neccesary imports
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './Login.css'

//Login functions
const Login = () => {
    const dispatch = useDispatch();

    // Declaration of States
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    // Function to handle changes in username
    const handleUserNameChange = (e) => {
        setUserName(e.target.value);
    }
  // Function to handle changes in password
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }
 // Function to handle submit button click
    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            dispatch({ type: 'ADD_USER', payload: { username, password } })
            setUserName('');
            setPassword('');
        }
    }
   // Function to validate the form
    const validateForm = () => {
        const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/;
        if (username.length < 5) {
            alert('username not valid');
            return false;
        }
        if (!passwordRegex.test(password)) {
            alert('Password not valid')
            return false;
        }
        return true;
    }
  // JSX for the login page
    return (
        <form onSubmit={handleSubmit}>
            <label>
                Username:
                <input type='text' value={username} onChange={handleUserNameChange} />
            </label>
            <label>
                Password:
                <input type='password' value={password} onChange={handlePasswordChange} />
            </label>
            <br />
            <button type='submit'>Submit</button>
        </form>
    )
}

export default Login