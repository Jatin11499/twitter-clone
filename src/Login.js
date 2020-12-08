import React from 'react';
import { Button } from '@material-ui/core';
import './Login.css';
import db, { auth, provider } from './firebase';
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';
import TwitterIcon from '@material-ui/icons/Twitter';

function Login() {
    const [{}, dispatch] = useStateValue();

    const signIn = () => {
        auth.signInWithPopup(provider)
        .then(result => {
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user
            })
        })
        .catch(error => alert(error.message));
    }

    return (
        <div className="login">
            <div className="login__container">
                <TwitterIcon className="login__twitterIcon"/>
                <div className="login__text">
                    <h1>Sign in to Twitter</h1>
                </div>

                <Button onClick={signIn}>
                    Sign In With Google
                </Button>
            </div>
        </div>
    )
}

export default Login;
