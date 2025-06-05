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
    >
      <button type="submit" :disabled="loading" class="button">
        {{ loading ? 'Resetting...' : 'Submit' }}
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
      newPassword: '',
      message: '',
      error: '',
      loading: false
    };
  },
  computed: {
    token() {
      return this.$route.query.token || '';
    }
  },
  methods: {
    async handleSubmit() {
      this.message = '';
      this.error = '';
      this.loading = true;

      const trimmedPassword = this.newPassword.trim();
      const { message, error } = await AuthService.resetPassword(this.token, trimmedPassword);

      this.message = message || '';
      this.error = error || '';
      this.loading = false;
    }
  }
};
</script>

<style scoped>
.reset-password {
  max-width: 400px;
  margin: 80px auto 0;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  height: 400px;
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
  align-self: flex-start;  /* align logo to left */
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
  font-size: 1.1rem;
  width: 80%;
}

label {
  align-self: flex-start;
}

</style>