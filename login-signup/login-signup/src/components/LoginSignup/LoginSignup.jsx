import React from 'react'
import './LoginSignup.css'

import email_icon from '../Assets/email.png'

export const LoginSignup = () => {

    return (
        <div className='container'>
            <div className="header">
                <div className="text">Sign Up</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                <div className="input">
                    <img src="" alt="" />
                    <input type="text" />
                </div>
                <div className="input">
                    <img src="{email_icon}" alt="" />
                    <input type="email" />
                </div>
                <div className="input">
                    <img src="" alt="" />
                    <input type="password" />
                </div>
            </div>
        </div>
    )
}

export default LoginSignup;