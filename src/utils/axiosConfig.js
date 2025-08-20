// utils/axiosConfig.js
import axios from "axios";

// ✅ Webpack (Create React App) ke liye ye kaam karega
axios.defaults.baseURL = process.env.REACT_APP_API_URL || "http://localhost:5000";
axios.defaults.withCredentials = true;

export default axios;
