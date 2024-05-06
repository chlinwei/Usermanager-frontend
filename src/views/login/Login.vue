<template>
  <div class="wrapper">
  <div class="wrapper_title">
    <span>Admin Management</span>
  </div>
  <el-row class="main" :gutter="20">
    <el-col class="bg-div" :span="12">
      <div class="bg"></div>
    </el-col>
    <el-col class="login-div" :span="12">
  <el-form class="login-form"  label-position="left" :model="user">
    <div class="login-form-title">
      <div style="font-weight: bold;font-size: 2rem;">Login</div>
    <div>
      <el-link href="https://element-plus.org" class="itembtn forgot"target="_blank">No account,Registry?</el-link> 
    </div>
    </div>
    <el-form-item>
      <el-input v-model="user.account" placeholder="Username or Email" prop="account"></el-input>
    </el-form-item>
    <el-form-item>
      <el-input v-model="user.password" type="password" placeholder="Password" prop="password"></el-input>
    </el-form-item>
    <el-checkbox v-model="user.remeber" label="Remeber me" size="large" />
    <el-form-item>
        <el-button class="login-btn" type="primary" @click="login">Log in</el-button>  
    </el-form-item>
    <div class="forgot_wrapper">
        <el-link href="https://element-plus.org" class="itembtn forgot"target="_blank">Forgot password?</el-link> 
    </div>
    <div>
      <el-divider content-position="center"><span>Or log in with</span></el-divider>
    </div>
  </el-form>
        
</el-col>
</el-row>
    
</div>
  
</template>

<script setup>
import axios  from 'axios';
import { reactive, ref } from 'vue';
// validation 
import FormRules from 'element-plus';
const user = reactive({
  "account": '',
  "password": '',
  "remeber": false,
})
const password = ref('');
const remeber = ref('');
const login = ()=> {
  const data = {
    username: username.value,
    password: password.value,
  };
  axios.defaults.baseURL = 'http://localhost:8080'
  axios.post('http://localhost:8080/dologin',data).then(response => {
    console.log(response.data);
  });  
}

</script>

<style scoped>
/* 组件的样式 */
.wrapper_title {
  text-align: center;
  margin-bottom: 45px;
  font-size: 28px;
  margin-top: 20px;
}
.login-form  {
  vertical-align: center;
  margin-left: 45px;
  margin-right: 45px;
}
.login-form-title {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  justify-content: space-around;
}
.login-form .el-form-item  {
  height:60px;
}
.el-form-item label {
  height:100%;
}
.login-div {
  width: 100%;
}
.bg {
  background-image: url(../../assets/login_bg.jpg) ;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  width: 100%;
  height: 100%;
}
.forgot_wrapper {
  display: flex;
  justify-content: center;
}
.forgot {
  font-size: 0.8rem;
}
.wrapper {
  margin: auto 15vw;
  margin-top: 15vh;
  min-width: 700px;
  box-shadow: inset;
  z-index: 11;
  box-shadow: var(--el-box-shadow-dark);
  padding: 20px;
}
.login-btn { 
  width: 100%;
}
</style>
