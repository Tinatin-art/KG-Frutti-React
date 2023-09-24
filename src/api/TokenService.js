class TokenService {

    getLocalRefreshToken() {
        const token = localStorage.getItem("refreshToken");
        return token
    }

    getLocalAccessToken() {
        const token = localStorage.getItem("token")
        return token
    }

    updateLocalAccessToken(refreshToken) {
        let token = localStorage.getItem("token");
        token = refreshToken;
        localStorage.setItem("token", token);
    }

    removeUser() {
        localStorage.removeItem("token");
    }

 

}

export default new TokenService()