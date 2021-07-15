import React from 'react';
import {GoogleOutlined} from '@ant-design/icons';
import "firebase/app";
import { auth } from '../firebase';
import firebase from 'firebase/app';

const Login = () => {
    return(
        <div id="login-page">
           
            <div id="login-card">
                <div className="loginlogo">
                    <img className="loginpic" src="/thelogo.png" alt="logo"/>
                </div>

                <h2 className="card-title">Welcome to Simply Chat!</h2>
                <br/><br/>

                <div
                    className="login-button google"
                    onClick={() => auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())}
                    >
                <GoogleOutlined /> Sign in with Google
                </div>

                <br/><br/>

            </div>
        </div>
    );
}

export default Login;