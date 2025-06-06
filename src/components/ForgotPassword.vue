<template>
  <div class="forgot-password">
    

    <form @submit.prevent="handleSubmit">
      <label for="email">Email:</label>
      <input type="email" v-model="email" required />

      <button type="submit" :disabled="loading">
        {{ loading ? 'Sending...' : 'Send Reset Link' }}
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


@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap');
.forgot-password {
 
  font-family: 'Inter', 'Open Sans';
  display: flex;
  justify-content: center;
  margin: 70px auto;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: #000000;
  background-color: #ffffff;
  min-height: 430px;
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
</style>
