<template>
  <div class="reset-password">
    <img src="/logo 1.png" alt="App Logo">  <!-- new added code line -->
    <h2>Password Reset </h2>
    <form @submit.prevent="handleSubmit">
        <p class="inspirational-text">
    Youth is 37% of South Africa... but 100% of its future
  </p> <!-- new added code line -->

  <label for="email"></label>
    <input 
      type="email" 
      id="email" 
      v-model="email"  
      placeholder="📧    Email"  

      required
    > <!-- new added code line -->
      <button type="submit" :disabled="loading" class="button">
        {{ loading ? 'Resetting...' : 'Send reset link' }}
      </button>
    </form>

    <p v-if="message" class="message">{{ message }}</p>
    <p v-if="error" class="error">{{ error }}</p>
  </div>
</template>


<script>
import AuthService from '@/services/AuthService.js';

export default {
  data() {
    return {
      email: '',
      message: '',
      error: '',
      loading: false
    };
  },
  methods: {
    async handleSubmit() {
      console.log("Forgot Password submitted with email:", this.email);
      this.loading = true;
      this.message = '';
      this.error = '';

      const trimmedEmail = this.email.trim();
      const { message, error } = await AuthService.sendResetLink(trimmedEmail);

      this.message = message || '';
      this.error = error || '';
      this.loading = false;
    }
  }
};
</script>

<style scoped>
.reset-password {
 
  font-family: 'Inter', 'Open Sans';
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

.message {
  color: green;
  margin-top: 10px; 
}
.error {
  color: red;
  margin-top: 10px;
}
button[disabled] {
  opacity: 0.6;
  cursor: not-allowed;
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


.inspirational-text{
  color : grey
}
.reset-password > img {
  margin-top:-200px;
  
}

.button {
  width: 40%;
  background-color: #003c8f;
  color: rgba(255, 255, 255, 0.753);
  border: none;
  border-radius: 12px;
  cursor: pointer;
}

.button:hover {
  background-color: #002f6c;
}

form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  width: 100%;
}

input[type="email"] {
  padding: 15px;
  margin-top : -55px;
  border: 1px solid #ccc;
    border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1.1rem;
  width: 80%;
}


</style>