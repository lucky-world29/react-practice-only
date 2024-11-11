import React, { action, useState } from 'react'
import './LoginSignup.css'

import user_icon from '../Assets/user.png'
import email_icon from '../Assets/email.png'
import lock_icon from '../Assets/lock.png'

export const LoginSignup = () => {

    const [action,setAction] = useState("Login");

    return (
        <div className='container'>
            <div className="header">
                <div className="text">{action}</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                {action === "Login" ?
                 <div></div> :
                <div className="input">
                    <img src={user_icon} alt="" />
                    <input type="text" placeholder='Name'/>
                </div>
                }
                
                <div className="input">
                    <img src={email_icon} alt="" />
                    <input type="email" placeholder='Email' />
                </div>
                <div className="input">
                    <img src={lock_icon} alt="" />
                    <input type="password" placeholder='Password' />
                </div>
                {action==="Sign Up"?
                  <div></div>:
                <div className='forgot-password'>Forgot Password ?<span>Click Here!</span></div>
                }
                
                <div className='submit-container'> 
                    <div className={action==="Login"?"submit grey ":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
                    <div className={action==="Sign Up"?"submit grey ":"submit"} onClick={()=>{setAction("Login")}}>Login</div>
                </div>
            </div>
        </div>
    )
}

export default LoginSignup;