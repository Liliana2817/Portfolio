import React, { useState } from 'react';
import { googleLogout } from '@react-oauth/google';
import { GoogleAuth } from '@react-oauth/google';
import { Avatar, Space } from 'antd';
import { ComponenteAntd } from 'antd';


import './login.css'
function Login() {

    let [ profile, setProfile ] = useState([]);



    // log out function to log the user out of google and set the profile array to null
    const Auth = () => {
        GoogleAuth ();
        setProfile(null);
        localStorage.clear();
        window.location = '/MY_PORTFOLIO';
    };
    if(localStorage.getItem('user') !== undefined){
        profile = JSON.parse(localStorage.getItem('user'));
    }
    return (
        <div>
            {profile ? (
                <div className="opc">
                    <div className="selectorOrder">
                        <div className="dropup">
                            <button className="dropbtn">
                                <ComponenteAntd  wrap size={16}>
                                    <ComponenteAntd src={profile.google ? profile.google.picture : 'https://img.freepik.com/vector-premium/icono-perfil-avatar_188544-4755.jpg'} />
                                </ComponenteAntd >
                            </button>
                        <div className="dropup-content">
                            <p>{profile.nombre}</p>
                            <p>{profile.email}</p>
                            <div><button className="nuevo" onClick={Auth}>Cerrar sesión</button></div>
                        </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="selectorOrder">
                    <div className="login">
                        <a href='/logarse'>Logarse</a>
                    </div>
                </div>
            )}
        </div>
    );
}
export default Login;