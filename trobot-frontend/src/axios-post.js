import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://trobot-project.firebaseio.com/',
});

export default instance;
