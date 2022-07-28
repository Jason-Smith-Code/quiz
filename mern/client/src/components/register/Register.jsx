import React, { useState } from 'react';
import {Link} from 'react-router-dom';

const Register = () => {
    const [userData, setUserData] = useState({
        email: '',
        password: ''
    })

    function updateuserData(value) {
        return setUserData((prev) => {
        return { ...prev, ...value };
        });
    }

    // This function will handle the submission.
    async function onSubmit(e) {
        e.preventDefault(); 

        // check if the email enter already

        // When a post request is sent to the create url, we'll add a new record to the database.
    const user = { ...userData };

    await fetch("http://localhost:5000/user/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    }).catch((error) => {
      window.alert(error);
      return;
    });

    setUserData({ email: "", password: "" });
  }

    return(
        <div className="form-container">
            <h1>Register</h1>
            <form className='form-layout' onSubmit={onSubmit}>
                <div className="form-group">
                    <label>Email</label>
                    <input value={userData.email} type="email" onChange={(e) => updateuserData({ email: e.target.value })}></input>
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input value={userData.password} type="text" onChange={(e) => updateuserData({ password: e.target.value })}></input>
                </div>
                <input type="submit" value="Register"></input>
            </form>
            <Link to="/"><button className="link-button middle">Return to main page</button></Link>
        </div>
    )
}

export default Register;