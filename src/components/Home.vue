<template>
  <v-layout column align-center>
    <img src="/static/v.png" alt="Vuetify.js" class="mb-5">
    <h5> Welcome To Lasgidi Tunes </h5>
    <v-btn primary round dark @click.stop="dialog = true">Sign In</v-btn>
    <v-dialog v-model="dialog" :width="'500px'">
      <v-card>
        <v-alert error dismissible v-model="loginError"> {{loginErrorMessage}}</v-alert>
        <v-card-title>
          <p class="headline text-md-center">Sign In to LasGidi Tunes</p>
        </v-card-title>
        <v-card-text>
          <v-text-field label="Username" required v-model="user.username"></v-text-field>
          <v-text-field label="Password" type="password" v-model="user.password" required></v-text-field>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn primary dark @click.native="signIn">Sign In</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
  import auth from '../auth'

  export default {
    name: 'hello',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        user: {
          username: '',
          password: '',
          authenticated: false
        },
        loginError: false,
        loginErrorMessage: '',
        dialog: false
      }
    },
    methods: {
      signIn() {
        this.loginError = false;
        auth.signIn(this, this.user);
      }
    },
    computed: {
      isUserAuthenticated() {
        return this.user.authenticated;
      }
    }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
