// Main modules
import React from 'react';
import { Link } from 'react-router-dom';

// Assets
import './styles.css';
import logo from '../../assets/logo.png'
import loginImg from '../../assets/loginImg.png';
import { FiLogIn } from 'react-icons/fi';


export default function Logon () {
    return (
        <div className='container-logon'>
            <section className='form'>
                <img src={logo} className='logo' alt='Rides plus Logo' />
                <form>
                    <h1> Access your account.</h1>
                    <input 
                        type='text'
                        placeholder='Your ID'
                        
                        />
                    <button className="btn btn-login">
                        Log in
                    </button>

                    <Link className='link' to='/register'>
                        <FiLogIn size={18}/> 
                        I don't have an account
                    </Link>
                </form>
            </section>
            <img src={loginImg} alt="Login Image" className="login"/>

        </div>       
    );
}

