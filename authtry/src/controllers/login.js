import NetworkManager from '../managers/networkManager';

class LoginController {

    login(loginData, callback) {
        var data = new FormData();
        var networkManager = new NetworkManager();
        networkManager.performPostRequest('http://localhost:8282/user/login', loginData, (error, res) => {
            callback(error, res);
        });

    }
}

export default LoginController;