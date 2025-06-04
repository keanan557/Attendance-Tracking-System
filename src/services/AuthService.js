// src/services/AuthService.js
import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000'; 

export default {
  async sendResetLink(email) {
    try {
      const res = await axios.post(`${API_BASE_URL}/forgot-password`, { email });
      return { message: res.data.message };
    } catch (err) {
      return {
        error: err.response?.data?.message || 'Failed to send reset link.'
      };
    }
  },

  async resetPassword(token, newPassword) {
    try {
      const res = await axios.post(`${API_BASE_URL}/reset-password`, {
        token,
        newPassword
      });
      return { message: res.data.message };
    } catch (err) {
      return {
        error: err.response?.data?.message || 'Password reset failed.'
      };
    }
  }
};
