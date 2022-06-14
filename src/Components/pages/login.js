import React from 'react';
import { Link } from 'react-router-dom';
import '../pages/form.css';


export default function Login() {
    return (
        <div className='form-container'>
            <div className='form'>
                <form>
                    <h1>Login</h1>
                    <div>
                        <input type="email" placeholder='Email'/>
                    </div>
                    <div>
                        <input type="text" placeholder='Password'/>
                    </div>
                    <input type="submit" />
                </form>
                <Link to='/users/register'><p>Not Registered? <br />Click Here To Register.</p></Link>
            </div>
        </div>
        
      )
}

