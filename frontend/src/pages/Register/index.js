//Main Modules
import React from 'react';

// Assets
import './styles.css';
import registerImg from '../../assets/registerImg.png';

export default function Register(){
    return (
        <div className="container-register">
            <section className="cover">
                <img src={registerImg} alt="Register Image"/>
                <h1>Register</h1>
                <p>Register in the platform and start sharing your journeys today!</p>
            </section>
            <section className="form">
                <form>
                    <input type="text" placeholder= "Name"/>
                    <input type="text" placeholder= "Email"/>
                    <input type="text" placeholder= "Whatsapp"/>
                    <div className="location">
                        <input type="text" placeholder= "City" style={{width: 275}} />
                        <input type="text" placeholder= "UF" style={{width: 65}}/>
                    </div>
                    <button className="btn btn-register">
                        Register
                    </button>
                </form>
            </section>
        </div>
    );
}