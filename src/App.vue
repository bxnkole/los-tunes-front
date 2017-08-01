<template>
  <div id="app">
  
    <el-row type="flex" justify="center">
      <el-col :span="12">
        <img src="./assets/logo.png">
        <h2>Welcome to LasGidi Tunes</h2>
  
        <el-button type="primary" @click="dialogFormVisible = true" icon="check">Sign In</el-button>
  
      </el-col>
    </el-row>
  
    <el-dialog title="Sign In" :visible.sync="dialogFormVisible">
      <el-form :label-position="'top'" :label-width="'120px'">
        <el-form-item label="Username">
          <el-input v-model="user.username" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="Password">
          <el-input type="Password" v-model="user.password" auto-complete="off"></el-input>
        </el-form-item>
      </el-form>
  
      <el-row>
        <el-button type="text">Forgot Password</el-button>
      </el-row>
  
      <el-row :type="'flex'">
        <el-col :span="3">
          <el-button @click="signIn" type="primary">Sign In</el-button>
        </el-col>
        <el-col :span="8">
          <el-button type="primary">Sign In With Facebook</el-button>
        </el-col>
        <el-col :span="2">
          <p>OR</p>
        </el-col>
        <el-col :span="8">
          <el-button type="primary">Sign In With Twitter</el-button>
        </el-col>
      </el-row>
  
      <el-row>
        Don't have an account yet?
        <el-button type="text">Sign Up Now!</el-button>
      </el-row>
    </el-dialog>
  </div>
</template>

<script>


export default {
  name: 'app',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      dialogFormVisible: false,
      user: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    signIn() {
      console.log(this.user.username)
    }
  }
}
</script>

<style>

</style>
