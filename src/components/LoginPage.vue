<template>
  <div class="login-container">
    <div class="login-card">


      <div class="top-logo">
        <img src="/logo 1.png" alt="Logo" class="logo" />
        <h2 class="title">Log in</h2>
      </div>

      <p class="subtitle">Youth is 37% of South Africa, but 100% of its future</p>

      <div class="input-container">
      <!-- Admin ID Input -->
      <div class="input-group">
        <!-- <i class="fas fa-user"></i> -->
        <img class="icon" src="/union-1.png" />
        <input
          type="text"
          placeholder="             Admin ID"
          v-model="adminId"
          required
        />
      </div>

      <!-- Password Input -->
      <div class="input-group">
        <!-- <i class="fas fa-lock"></i> -->
         <img class="icon" src="/Key.png" />
        <input
          type="password"
          placeholder="             Password"
          v-model="password"
          required
        />
      </div>
      </div>

      <!-- Remember Me Checkbox -->
      <div class="remember-me">
        <input type="checkbox" id="rememberMe" v-model="rememberMe" />
        <label for="rememberMe">Remember me</label>
      </div>

      <!-- Login Button -->
      <button class="login-button" @click="handleLogin">Login</button>
    </div>
  </div>
</template>

<script>


</script>

<style>
/* keanan css */

body{
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
  height: 100vh;
  width: 100%;
}
</style>


<style scope>
/* keanan css */


.title{
  font-size: 30px;
  font-weight: 500;
}

.icon{
  position: absolute;
  padding: 12px;
  min-width: 20px;
}

.remember-me{
  margin-top: 3rem;
  margin-bottom: 3rem;
}

.subtitle{
  margin-bottom: 2rem;
}

.login-container{
  /* border: 1px solid blue; */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  /* gap: 6rem; */
  height: 595px;
  width: 440px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
}

.login-button{
  background: #6EC966;
  width: 200px;
  border-radius: 20px;
  height: 46px;
  cursor: pointer;
}

.top-logo{
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 6rem;
}

.input-group input{
  width: 343px;
  height: 51px;
  /* border: 2px solid red; */
  border-radius: 7px;
  
}

.input-group input::placeholder {
  font-weight: 400;
font-family: Poppins;
color: #000;
font-size: 16px;
}

.input-container{
  display: flex;
  flex-direction: column;
  gap: 4rem;
}

</style>