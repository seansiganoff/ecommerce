import React from 'react';
import '../pages/form.css';

export default function Register() {
    return (
        <div className='form-container'>
            <div className='form'>
                <form>
                    <h1>Register</h1>
                    <div>
                        <input type="text" placeholder='Name'/>
                    </div>
                    <div>
                        <input type="email" placeholder='Email'/>
                    </div>
                    <div>
                        <input type="password" placeholder='Password'/>
                    </div>
                    <div>
                        <input type="password" placeholder='Re-type password'/>
                    </div>
                    <input type="submit" />
                </form>
            </div>
        </div>
        
      )
}

