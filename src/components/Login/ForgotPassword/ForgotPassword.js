import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { forgotPassword } from '../../../store/actions/authActions';
import { withRouter } from 'react-router-dom';
import classes from './ForgotPassword.module.scss';
import LoginTextPage from '../component/LoginTextPage'
import LoginFormPages from '../component/formLoginPages'

function ForgotPassword() {
    const dispatch = useDispatch();
    const error = useSelector(state => state.authError);

    const [email, setEmail] = useState('');

    const onFormSubmit = event => {
        event.preventDefault();
        dispatch(forgotPassword({ email }));
    };

    if (error) {
        console.log(error);
    }

    return (
        <div className={classes.forgotPasswordDiv}>
            <div className={classes.forgotText}>
            <LoginTextPage/>
            </div>

            <div className={classes.form}>
                <LoginFormPages setEmail={setEmail} onFormSubmit={onFormSubmit} LoginFunction='forgotPassword'/>
            </div>
        </div>

    );
}

export default withRouter(ForgotPassword);
