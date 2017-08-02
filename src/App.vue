<template>
  <v-app light>
    <v-navigation-drawer persistent :mini-variant="miniVariant" :clipped="clipped" v-model="drawer" enable-resize-watcher>
      <v-list>
        <v-list-tile value="true" v-for="(item, i) in items" :key="i">
          <v-list-tile-action>
            <v-icon light v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar fixed>
      <v-toolbar-side-icon @click.native.stop="drawer = !drawer" light></v-toolbar-side-icon>
      <v-toolbar-title v-text="title"></v-toolbar-title>
    </v-toolbar>

    <main>
      <v-container fluid>
        <v-slide-y-transition mode="out-in">
          <v-layout column align-center>
            <img src="/static/v.png" alt="Vuetify.js" class="mb-5">
            <h5> Welcome To Lasgidi Tunes </h5>
            <v-btn primary round dark @click.stop="dialog = true">Sign In</v-btn>
            <v-dialog v-model="dialog" :width="'500px'">
              <v-card>
                <v-alert error dismissible v-model="loginError"> {{loginErrorMessage}} </v-alert>
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
        </v-slide-y-transition>
      </v-container>
    </main>
    <v-footer :fixed="fixed">
      <span>&copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
import auth from './auth'

export default {
  data() {
    return {
      miniVariant: false,
      clipped: false,
      drawer: true,
      fixed: false,
      items: [
        { icon: 'bubble_chart', title: 'Inspire' }
      ],
      rightDrawer: false,
      title: 'LasGidi Tunes',
      dialog: false,
      user: {
        username: '',
        password: '',
        authenticated: false
      },
      loginError: false,
      loginErrorMessage: ''
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

<style lang="stylus">
  @import './stylus/main'
</style>
