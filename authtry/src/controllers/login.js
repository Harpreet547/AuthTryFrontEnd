import NetworkManager from '../managers/networkManager';

class LoginController {

    login(email, password) {
        var data = new FormData();
        var loginData = {
            email: 'abc@gmail.com',
            password: 'abc'
        }

        var networkManager = new NetworkManager();
        networkManager.performPostRequest('http://localhost:8282/user/login', loginData, (error, res) => {
            console.log('LOGIN REQUEST: Error: ' + JSON.stringify(error) + ' Response: ' + JSON.stringify(res));
        });

    }
}

export default LoginController;