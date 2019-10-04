import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();
const { REACT_APP_FIREBASE_ENDPOINT } = process.env;

const instance = axios.create({
  baseURL: REACT_APP_FIREBASE_ENDPOINT,
});

export default instance;
