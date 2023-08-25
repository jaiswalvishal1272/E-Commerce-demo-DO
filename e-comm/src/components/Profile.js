import React, { useState } from "react";
import { Link } from 'react-router-dom';

const Profile = () => {
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');

    const handleLogin = async () => {
        console.log(Email, Password);
        let result = await fetch('http://localhost:5000/login', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",

            },
            body: JSON.stringify({ Email, Password }),
        });
        const user = await result.json();
        console.log("Login as: ", user);
        if(user) {
            localStorage.setItem("User", JSON.stringify(user));
        }
        else {
            console.log("No user Found");
        }

    }

   

    return(
        <div className="profile-section">
            <h2>Profile Section</h2>
            <input className="input-box" type="text" value={ Email } onChange={ (e) => {setEmail(e.target.value)} } placeholder="Enter Email..." />
            <input className="input-box" type="password" value={ Password } onChange={ (e) => {setPassword(e.target.value)} } placeholder="Enter Password..." />

            <button className="login-btn" type="button" onClick={ handleLogin }>Log In</button>
            <Link to="/signup">Dont't have account</Link>
        </div>
    )
}
export default Profile;