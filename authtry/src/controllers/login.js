import React, { Component } from 'react';

class LoginController {

    login() {
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
            var result
            if(res.err != null) {
                console.log('no error');
            }
        });
    }
}