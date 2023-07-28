import axios from "axios";

const axiosURL = axios.create({
  // baseURL: "https://internship-api.onrender.com",
  baseURL: `${import.meta.env.VITE_REACT_APP_API_URL}`,
  timeout: 5000, // temps d'attente en millisecondes avant d'annuler une requête
});

export default axiosURL;
