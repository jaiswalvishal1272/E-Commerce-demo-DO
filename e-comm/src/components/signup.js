import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Signup = () => {
    const [Name, setName] = useState('');
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');

    const handleSignup = async () => {
        console.log(`Name: ${Name}, Email: ${Email}, Password: ${Password}`);
        let result = await fetch('http://localhost:5000/signup', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ Name, Email, Password }),
        });
        const user = await result.json();
        // console.log(`Register as: ${user}`);
        console.log("Register as: ", user);
    }

  return (
    <div className="profile-section">
            <h2>Profile Section</h2>
            <input className="input-box" type="text" value={ Name } onChange={ (e) => {setName(e.target.value)} } placeholder="Enter Name..." />
            <input className="input-box" type="text" value={ Email } onChange={ (e) => {setEmail(e.target.value)} } placeholder="Enter Email..." />
            <input className="input-box" type="password" value={ Password } onChange={ (e) => {setPassword(e.target.value)} } placeholder="Enter Password..." />

            <button className="signup-btn" type="button" onClick={ handleSignup }>Sign Up</button>
            <Link to="/profile">Already have an account</Link>
        </div>
)}

export default Signup;