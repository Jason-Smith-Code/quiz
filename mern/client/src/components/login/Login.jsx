import {Link} from 'react-router-dom';

const Login = () => {
    return(
        <div className="form-container">
            <form className='form-layout'>
                <div className="form-group">
                    <label>Email</label>
                    <input type="email"></input>
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="text"></input>
                </div>
                <input type="submit" value="Start"></input>
            </form>
            <Link to="/"><button className="link-button middle">Return to main page</button></Link>
        </div>
    )
}

export default Login;