<template>
  <div class="reset-password">
    <img src="https://raw.githubusercontent.com/luthandodake10111/iliso--frontend-images-/main/LC%20logo.png" alt="App Logo">
    <h2>Reset Password</h2>
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

      this.loading = true;
      this.message = '';
      this.error = '';

      // ✅ Get token from URL
      const urlParams = new URLSearchParams(window.location.search);
      const token = urlParams.get("token");

      if (!token) {
        this.error = "Missing or invalid token!";
        this.loading = false;
        return;
      }

      try {
        const response = await fetch('http://localhost:3000/reset-password?token=${token}', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ token, newPassword: this.newPassword }),
        });

        const data = await response.json();
        if (response.ok) {
          this.message = data.message;
          this.error = '';
          // Redirect to login after short delay
          setTimeout(() => {
            window.location.href = '/'; // or your actual login path
          }, 2000);
        } else {
          this.error = data.message || "Something went wrong.";
        }
      } catch (err) {
        this.error = "Failed to reset password. Please try again.";
        console.error(err);
      } finally {
        this.loading = false;
      }
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
