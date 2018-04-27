import React, { Component } from 'react';

class NetworkManager {
    performPostRequest(url, reqBody, callback) {
        fetch(url, {
            method: 'POST',
            body: JSON.stringify(reqBody),
            headers: {'Content-Type': 'application/json'},
        }).then(response => response.json(), error => {
            //console.log('ERROR IN FETCH LOGIN: ' + error)
            callback(error, null);
        }).then(res => {
            //console.log('Response: ' + JSON.stringify(res));
            callback(null, res);
        });
    }
}

export default NetworkManager;