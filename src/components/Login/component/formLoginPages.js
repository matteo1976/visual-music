import React, { useState } from 'react';
import './loginTextPage.scss' 
import Button from '../../../components/units/Button/Button';
import FormInput from '../../../components/units/FormInput/formInput.component';
import classes from './formLoginPages.module.scss'


export default class LoginFormPages extends React.Component{
render(){
    const { setEmail, onFormSubmit,LoginFunction } =this.props
    const TITLE=(LoginFunction==='forgotPassword'? "Forgot Password":"Login")
    const SUBTITLE=(LoginFunction==='forgotPassword'? "Enter your email id and we will send you a link to reset your password":"Insert username and password")

    const buttonStyle={
        width: '250px',
        height: '50px',
        left: '1052px',
        top: '373px',
        background: 'rgba(196, 51, 136, 0.75)',
        border: '2px solid rgba(196, 51, 136, 0.75)',
        boxSizing: 'borderBox',
        borderRadius: '41px',       
    }



    const FORM=(LoginFunction==='forgotPassword'? 
        <form >
            <h1 className={classes.pageTitle}>{TITLE}</h1>
            <p className={classes.subTitle}>{SUBTITLE}</p>

            <div className={classes.formGroup}>
                <FormInput
                    labelText="Enter your email"
                    type="email"
                    onChange={e => setEmail(e.target.value)}
                    placeholder="jon@westeros.com"
                    fontSize='medium'
                    style={{"width":"80%", "color":"black"}}
                />
            </div>
            
            <div>
                <Button
                    style={buttonStyle}
                    btnClass="signUp"
                    text="Submit"
                    type="submit"
                    onClick={onFormSubmit}
                />
            </div>
        </form>   

    : 
        <form >
            <h1 className={classes.pageTitle}>{TITLE}</h1>
            <p className={classes.subTitle}>{SUBTITLE}</p>

            <div className={classes.formGroup}>
                <FormInput
                    labelText="Enter your username"
                    type="text"
                    //onChange={e => setEmail(e.target.value)}
                    //placeholder="jon@westeros.com"
                    fontSize='medium'
                    style={{"width":"80%"}}
                />
                <FormInput
                    labelText="Enter your password"
                    type="password"
                    //onChange={e => setEmail(e.target.value)}
                    //placeholder="jon@westeros.com"
                    fontSize='medium'
                    style={{"width":"80%"}}
                />

            </div>

            <div>
                <Button
                    style={buttonStyle}
                    btnClass="signUp"
                    text="Submit"
                    type="submit"
                    onClick={onFormSubmit}
                />
            </div>
        </form>   
    )


    return(
        
        <div className={classes.formStyle}>
            <div className={classes.container}>
                {FORM}
            </div>

        </div>

    )}

}

