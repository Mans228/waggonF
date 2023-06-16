<template>
  <div class="auth-form">
    <h2>Sign up</h2>
    <form>
      <div class="form-group">
        <label for="first-name">First name</label>
        <input v-model="firstname" type="text" id="first-name"  />
      </div>
      <div class="form-group">
        <label for="last-name">Last name</label>
        <input v-model="lastname" type="text" id="last-name" />
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" id="email" v-model="email" />
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" id="password" v-model="password" />
      </div>
      <button type="submit" @click.prevent="handleSubmit">Sign up</button>
      <button @click.prevent ="checkToken">Check Token</button>
    </form>
  </div>
</template>

<script setup>
import axios from 'axios';
import { ref } from 'vue';
import router from "@/router";
import { useUserStore } from '@/store/user';
import api from "../api/api";



const firstname = ref("");
const lastname = ref("");
const email = ref("");
const password = ref("");
const userStore = useUserStore();

const handleSubmit = async () => {
  axios.post('https://proto.waggon24.com/demoProtokoll-0.0.1-SNAPSHOT/api/auth/register', {  //https://proto.waggon24.com/demoProtokoll-0.0.1-SNAPSHOT/api/auth/register
    firstname: firstname.value,
    lastname: lastname.value,
    email: email.value,
    password: password.value,
  }).then(userStore.setEmail(email.value)).then(response=>{
    const token = response.data.access_token;
    const refresh_token = response.data.refresh_token;
    localStorage.setItem('token',token)
    localStorage.setItem('refresh_token', refresh_token)
    console.log(token);
    console.log(refresh_token)
    console.log(localStorage.getItem('token'))
    if (ref(token)!==undefined){
      userStore.setEmail(email.value)
      router.push('/fill')

    }
    });





  /*try {
    const response = await axios.post('http://localhost:8080/api/auth/register', {
      firstname: firstname.value,
      lastname: lastname.value,
      email: email.value,
      password: password.value,
    });
    const token = response.data.token;
    localStorage.setItem('token', token); // save the token in localStorage for future requests
  } catch (error) {
    console.log(error);
  }
};*/
const checkToken = () => {
  const token = localStorage.getItem('token');
  if (token) {
    console.log('Token:', token);
  } else {
    console.log('Token not found.');
  }
};}

</script>

<style scoped>
.auth-form {
  max-width: 400px;
  margin: 0 auto;
  padding: 40px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
}

h2 {
  margin-top: 0;
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

input[type='text'],
input[type='email'],
input[type='password'] {
  display: block;
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
}

button[type='submit'] {
  display: block;
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
}

button[type='submit']:hover {
  background-color: #0069d9;
}
</style>
