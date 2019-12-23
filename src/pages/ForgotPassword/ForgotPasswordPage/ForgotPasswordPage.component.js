import React from 'react';
import Button from '../../../components/units/Button/Button';
import FormInput from '../../../components/units/FormInput/formInput.component';
import classes from './ForgotPasswordPage.module.scss';
import LoginTextPage from '../component/LoginTextPage'

function ForgotPasswordPage({ setEmail, onFormSubmit }) {
    return (
        <div className={classes.forgotPasswordDiv}>
            <div className={classes.forgotText}>
            <LoginTextPage/>
            </div>
            <div className={classes.form}>
                <div className={classes.testa}>
                <form >
                    <h1 className={classes.pageTitle}>Forgot Password</h1>
                    <p className={classes.subTitle}>
                        Submit the form to reset your password
                    </p>

                    <div className={classes.formGroup}>
                        <FormInput
                            labelText="Enter your email"
                            type="email"
                            onChange={e => setEmail(e.target.value)}
                            placeholder="jon@westeros.com"
                            fontSize='medium'
                            style={{"width":"80%"}}
                        />
                    </div>
                    {/* 
                    <div>
                        <Button
                            btnClass="signUp"
                            text="Submit"
                            type="submit"
                            onClick={onFormSubmit}
                        />
                    </div>*/} 
                </form>   

                </div>


                {/* <div className={classes.testa}></div>
                <div className={classes.testb}> */}


            </div>


            
            


        </div>
    );
}

export default ForgotPasswordPage;
