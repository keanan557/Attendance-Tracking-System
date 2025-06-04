<template>
  <div class="forgot-password">
    <h2>Forgot Password</h2>
    <form @submit.prevent="handleSubmit">
      <label for="email">Email:</label>
      <input type="email" v-model="email" required />
      <button type="submit">Send Reset Link</button>
    </form>
    <p v-if="message" class="message">{{ message }}</p>
    <p v-if="error" class="error">{{ error }}</p>
  </div>
</template>

<script>
import AuthService from '@/services/AuthService';

export default {
  data() {
    return {
      email: '',
      message: '',
      error: ''
    };
  },
  methods: {
    async handleSubmit() {
      this.message = '';
      this.error = '';
      const { message, error } = await AuthService.sendResetLink(this.email);
      this.message = message || '';
      this.error = error || '';
    }
  }
};
</script>

<style scoped>
.forgot-password {
  max-width: 400px;
  margin: auto;
  padding: 20px;
}
.message {
  color: green;
}
.error {
  color: red;
}
</style>
