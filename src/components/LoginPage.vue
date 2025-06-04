<template>
  <div class="login-container">
    <form id="login-form" class="login-card" @submit.prevent="handleLogin">


      <div class="top-logo">
        <img src="#" alt="Logo" class="logo" />
        <h2 class="title">Log in</h2>
      </div>

      <!-- <p class="subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p> -->
      <p class="subtitle">Youth is 37% of South Africa, but 100% of its future</p>

      <div class="input-container">
        <!-- Admin ID Input -->
        <div class="input-group">
          <!-- <i class="fas fa-user"></i> -->
          <img class="icon" src="/union-1.png" />
          <input type="text" id="userId" placeholder="Admin ID" v-model="adminId" required />
        </div>

        <!-- Password Input -->
        <div class="input-group">
          <!-- <i class="fas fa-lock"></i> -->
          <img class="icon" src="/Key.png" />
          <input type="password" id="password" placeholder="Password" v-model="password" required />
        </div>
      </div>

      <!-- Remember Me Checkbox -->
      <div class="remember-me">
        <label><input type="checkbox" id="rememberMe" v-model="rememberMe" />Remember me</label>
      </div>

      <!-- Login Button -->
      <button type="submit" class="login-button">Login</button>
          <div v-if="errorMessage" class="error-message">
            {{ errorMessage }}
          </div>

          <p class="forgot-password">
          <a href="#">Forgot Password?</a>
          </p>
    </form>
  </div>
</template>


<script>
import axios from 'axios';
import { mapActions } from 'vuex';

export default {
  name: "LoginPage",
  data() {
    return {
      adminId: '',
      password: '',
      rememberMe: false,
      errorMessage: '',
    };
  },
  methods: {
    ...mapActions(['setToken', 'setStaff']),
    async handleLogin() {
      this.errorMessage = '';
      try {
        const response = await axios.post("http://localhost:3000/staff", {
          adminId: this.adminId,
          password: this.password,
        });

        if (response.data.token) {
          // If the login is successful, store the token in localStorage and Vuex
          localStorage.setItem('token', response.data.token);
          this.setToken(response.data.token);
          this.setStaff(response.data.staff);

          // Redirect after delay
          setTimeout(() => {
            this.$router.push("/");
          }, 2000);
        }
      } catch (error) {
        this.errorMessage = error.response?.data?.message || "Invalid ID or password. Please try again.";
      }
    },
  },
};
</script>

<style scoped>
/* keanan css */

.login-container {
  font-family:  'Inter', 'Open Sans';
  display: flex;
  justify-content: center;
  margin: 70px auto;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: #000000;
  background-color: #ffffff;
  height: 595px;
  width: 440px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);

}

.title {
  font-size: 30px;
  font-weight: 500;
}

.icon {
  position: absolute;
  padding: 12px;
  min-width: 20px;
}

.remember-me {
  margin-top: 3rem;
  margin-bottom: 3rem;
}

.subtitle {
  margin-bottom: 2rem;
}

.login-button {
  background: #0F4392;
  width: 200px;
  height: 46px;
  cursor: pointer;
  background-color: #0F4392;
  color: #fff;
  border: none;
  border-radius: 12px;
  padding: 12px 0;
  font-weight: bold;
  font-size: 16px;
}

.login-button :hover{
  
}

.top-logo {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.logo {
  width: 50px;
  height: 50px;
  object-fit: contain;
}
.input-group {
  position: relative;
  display: flex;
  align-items: center;
}

.input-group .icon {
  position: absolute;
  width: 20px;
  height: 20px;
  pointer-events: none;
}
.input-group input {
  width: 343px;
  height: 51px;
  /* border: 2px solid red; */
  border-radius: 7px;
  padding-left: 40px;
  border: 2px solid #ccc;
  font-size: 14px;
}

.input-group input::placeholder {
  font-weight: 400;
  font-family: Poppins;
  color: #000;
  font-size: 16px;
}

.input-container {
  display: flex;
  flex-direction: column;
  gap: 4rem;
}

.remember-me label {
  display: flex;
  align-items: center;
  font-size: 14px;
  gap: 10px;
  justify-content: start;
  width: 100%;
  padding-left: 20px;
}

.forgot-password {
  margin-top: 10px;
}

.forgot-password a {
  color: #0F4392;
  font-size: 12px;
  display: inline-block;
  margin-top: 8px;
  text-decoration: none;
}

</style>