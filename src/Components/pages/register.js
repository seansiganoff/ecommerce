import React from 'react';
import '../pages/form.css';
import { motion } from 'framer-motion';

export default function Register() {
    return (
        <motion.div className='form-container' initial={{opacity: 0}} animate={{opacity: 1, transition:{duration: 1}}} exit={{opacity: 0}}>
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
        </motion.div>
        
      )
}

