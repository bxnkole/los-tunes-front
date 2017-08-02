import axios from 'axios'

export default {
    signIn(context, user) {
        console.log('Signing in with user: ' + user);

        axios.post('/auth', user)
            .then(function(response) {
                const token = response.data.id_token;
                console.log(token);
                if (token) {
                    localStorage.setItem("authToken", token);
                    axios.defaults.headers.common['Authorization'] = token;
                }
            }).catch(function(error) {
                console.log(error.response);
                context.loginErrorMessage = error.response.data;
                context.loginError = true;
            });
    }
}