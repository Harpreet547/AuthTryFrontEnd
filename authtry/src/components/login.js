import React, { Component } from 'react';
import ReactDom from 'react-dom';

import { Card, CardActions, CardTitle } from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

import loginStyle from '../styles/login';
import appConstants from '../utils/appConstants';
/*
headers: {
                "application/json": "Content-Type",
                "application/json": "Accept"
                /*
                'Content-Type':'application/x-www-form-urlencoded',
                "Access-Control-Allow-Origin": "*",
                'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,OPTIONS',
                'Access-Control-Allow-Headers': 'Content-type,Accept,X-Access-Token,X-Key'
                */
           /* },
*/
class Login extends Component {

    constructor(props) {
        super(props);
        
    }

    onLoginTap() {
        var data = new FormData();
        var loginData = {
            email: 'abc@gmail.com',
            password: 'abc'
        }
        data.append('', JSON.stringify(loginData));
        fetch('http://localhost:8282/user/login', {
            method: 'POST',
            body: JSON.stringify(loginData),
            headers: {'Content-Type': 'application/json'},
        }).then(response => response.json(), error => {
            console.log('ERROR IN FETCH LOGIN: ' + error)
        }).then(res => {
            console.log('Response: ' + JSON.stringify(res));
            if(res.err != null) {
                
            }
        });
        
    }

    render() {
        return (
            <div style={ loginStyle.rootDiv } className='LoginRootDiv'>
                <Card style={ loginStyle.loginCard } className='LoginCard'>
                    <CardTitle 
                        style={ loginStyle.cardTitle }
                        titleColor={ appConstants.appTheme.secondaryTextColor }
                        subtitleColor={ appConstants.appTheme.secondaryTextColor }
                        title='Login'
                        subtitle='Please enter your username and password.'/>
                    
                    <div style={ loginStyle.credentialDiv } className='credentialDiv'>
                        <div style={ loginStyle.credentialTextFieldDiv }>
                            <TextField
                                style={ loginStyle.credentialTextField }
                                ref='textFieldUsername'
                                id='textFieldUsername'
                                floatingLabelText='Username'/>
                        
                        </div>
                        <div style={ loginStyle.credentialTextFieldDiv }>
                            <TextField
                                style={ loginStyle.credentialTextField }
                                ref='textFieldPassword'
                                id='textFieldPassword'
                                floatingLabelText='Password'/>
                        </div>
                        
                    </div>

                    <CardActions style={ loginStyle.cardActions }>
                        <FlatButton label='Login' style={ loginStyle.loginButton } onClick={ this.onLoginTap }/>
                    </CardActions>
                </Card>
            </div>
        );
    }
}

export default Login;