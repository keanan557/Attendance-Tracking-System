<template>
  <div class="login-container">
    <div class="login-card">
      <img src="path/to/logo.png" alt="Logo" class="logo" />
      <h2 class="title">Log in</h2>
      <p class="subtitle">Youth is 37% of South Africa, but 100% of its future</p>

      <!-- Admin ID Input -->
      <div class="input-group">
        <i class="fas fa-user"></i>
        <input
          type="text"
          placeholder="Admin ID"
          v-model="adminId"
          required
        />
      </div>

      <!-- Password Input -->
      <div class="input-group">
        <i class="fas fa-lock"></i>
        <input
          type="password"
          placeholder="Password"
          v-model="password"
          required
        />
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