<template>
  <div class="reset-password">
    

    <form @submit.prevent="handleSubmit">
     <img src="https://raw.githubusercontent.com/luthandodake10111/iliso--frontend-images-/main/LC%20logo.png" alt="App Logo">  <!-- new added code line --> 
            <h2>Forgot Password </h2>
            <p class="inspirational-text">
    Youth is 37% of South Africa... but 100% of its future
  </p> <!-- new added code line -->

  <label for="email"></label>
    <input 
      type="email" np
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


@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap');
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

h2 {
  margin: -20px 0;
  font-weight: 600;
}


.inspirational-text{
  color : grey;
  margin: 20px 0 -20px;
}

.button {
    width: 200px;
  height: 46px;
  cursor: pointer;
  background-color: #0F4392;
  color: #fff;
  border: none;
  border-radius: 12px;
  font-weight: bold;
  font-size: 16px;
  transition: background-color 0.3s ease, color 0.3s ease;
}

/* Button hover effect: changes background and font color */
.login-button:hover {
  background-color: #7DC5F8;
  color: #000; 
}

form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 3rem;
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