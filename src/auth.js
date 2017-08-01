import axios from 'axios'

export default {
    signIn(user) {
        console.log('Signing in with user: ' + user);

        axios.post('/login', {
            username: user.username,
            password: user.password
        }).then(function(response){
            
        });
    }
}