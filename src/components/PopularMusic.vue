<template>
  <v-container fluid>
    <v-layout row wrap>
      <v-flex md6><h4>Popular Music</h4></v-flex>
    </v-layout>
    <v-layout row v-if="loadingItems">
      <v-flex md6 offset-md3 class="text-md-center">
        <v-progress-circular indeterminate :size="70" :width="7" class="purple--text"></v-progress-circular>
      </v-flex>
    </v-layout>
    <v-layout row v-else>
      <v-flex md12>
        <v-list two-line>
          <v-list-tile avatar v-for="item in items" v-bind:key="item.title">
            <v-list-tile-avatar>
              <v-icon v-bind:class="[item.iconClass]">{{ item.icon }}</v-icon>
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
              <v-list-tile-sub-title>{{ item.subtitle }}</v-list-tile-sub-title>
            </v-list-tile-content>
            <v-list-tile-action>
              <v-btn icon ripple>
                <v-icon class="grey--text text--lighten-1">info</v-icon>
              </v-btn>
            </v-list-tile-action>
          </v-list-tile>
        </v-list>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
  import axios from 'axios'

  export default {
    data() {
      return {
        items: [
          {icon: 'folder', iconClass: 'grey lighten-1 white--text', title: 'Photos', subtitle: 'Jan 9, 2014'},
          {icon: 'folder', iconClass: 'grey lighten-1 white--text', title: 'Recipes', subtitle: 'Jan 17, 2014'},
          {icon: 'folder', iconClass: 'grey lighten-1 white--text', title: 'Work', subtitle: 'Jan 28, 2014'}
        ],
        items2: [
          {icon: 'assignment', iconClass: 'blue white--text', title: 'Vacation itinerary', subtitle: 'Jan 20, 2014'},
          {icon: 'call_to_action', iconClass: 'amber white--text', title: 'Kitchen remodel', subtitle: 'Jan 10, 2014'},
        ],
        loadingItems: true
      }
    },
    created() {
      console.log("Created");
      this.fetchFromServer();
    },
    methods: {
      fetchFromServer() {
        axios.post("/abc/def", {}).then((e) => {
          this.loadingItems = false;
        }).catch((error) => {
          this.loadingItems = false
        });
      }
    }
  }
</script>
<style>
  .oga {
    justify-content: center;
  }
</style>
