import React from 'react';
import { Link } from 'react-router-dom';
import '../pages/form.css';
import { motion } from 'framer-motion';


export default function Login() {
    return (
        <motion.div className='form-container' initial={{opacity: 0}} animate={{opacity: 1, transition:{duration: 1}}} exit={{opacity: 0}}>
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
        </motion.div>
        
      )
}

