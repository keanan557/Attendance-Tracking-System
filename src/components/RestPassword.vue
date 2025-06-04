<template>
  <div class="reset-password">
    <h2>Reset Password</h2>
    <form @submit.prevent="handleSubmit">
      <label for="password">New Password:</label>
      <input type="password" v-model="newPassword" required />
      <button type="submit">Reset Password</button>
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
      newPassword: '',
      message: '',
      error: ''
    };
  },
  computed: {
    token() {
      return this.$route.query.token || 'mock-token'; // Fallback for testing
    }
  },
  methods: {
    async handleSubmit() {
      this.message = '';
      this.error = '';
      const { message, error } = await AuthService.resetPassword(this.token, this.newPassword);
      this.message = message || '';
      this.error = error || '';
    }
  }
};
</script>

<style scoped>
.reset-password {
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
