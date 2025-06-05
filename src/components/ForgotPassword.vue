<template>
  <div class="forgot-password">
    <img src="/logo 1.png" alt="App Logo">
    <h2>Forgot Password</h2>
    <form @submit.prevent="handleSubmit">
      <p class="inspirational-text">
        Youth is 37% of South Africa... but 100% of its future
      </p>

      <div class="password-input">
        <label for="new-password"></label>
        <img src="/icon.png" alt="key icon" class="input-icon">
        <input 
          type="password" 
          id="new-password" 
          v-model="newPassword" 
          placeholder="      New password"  
          required 
        />
      </div>

      <div class="password-input">
        <label for="confirm-password"></label>
        <img src="/icon.png" alt="key icon" class="input-icon">
        <input 
          type="password" 
          id="confirm-password" 
          v-model="confirmPassword" 
          placeholder="      Confirm password"  
          required 
        />
      </div>

      <button type="submit" :disabled="loading">
        {{ loading ? 'Sending...' : 'Submit' }}
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
      confirmPassword: '',
      message: '',
      error: '',
      loading: false
    };
  },
  methods: {
    async handleSubmit() {
      if (this.newPassword !== this.confirmPassword) {
        this.error = "Passwords do not match!";
        return;
      }

      console.log("Password reset submitted");
      this.loading = true;
      this.message = '';
      this.error = '';

      try {
        const { message, error } = await AuthService.resetPassword(this.newPassword);
        this.message = message || '';
        this.error = error || '';
      } catch (err) {
        this.error = "Failed to reset password. Please try again.";
      } finally {
        this.loading = false;
      }
    }
  }
};

</script> <!-- updated script  -->

<style scoped>
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


.password-input {
  position: relative;
}

.input-icon {
  position: absolute;
  left: 15px;
  top: 40%;
  transform: translateY(-50%);
  width: 20px;
  z-index: 1;
}

.inspirational-text{
  color : grey
}
.forgot-password > img {
  margin-top:-74px;
  


}

button[type="submit"] {
  width: 50%;
  background-color: #003c8f;
  color: rgba(255, 255, 255, 0.753);
  border: none;
  border-radius: 12px;
  cursor: pointer;
}

button[type="submit"] {
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
#new-password,
#confirm-password {
  width: 100%;
  padding: 15px 15px 15px 45px;
  border: 1px solid #ccc;
  font-size: 1.1rem;
  margin-bottom: 10px; 
}


</style>
