import React, { Component } from 'react';
import ReactDom from 'react-dom';

import { Card, CardActions, CardTitle } from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

import loginStyle from '../styles/login';
import appConstants from '../utils/appConstants';
import LoginController from '../controllers/login';

class Login extends Component {

    constructor(props) {
        super(props);
        console.log('Login Props: ' + JSON.stringify(this.props))
    }

    onLoginTap() {
        var email = document.getElementById('textFieldUsername').value;
        var password = document.getElementById('textFieldPassword').value;
        var loginData = {
            email: email,
            password: password
        }
        var loginController = new LoginController();
        loginController.login(loginData);
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