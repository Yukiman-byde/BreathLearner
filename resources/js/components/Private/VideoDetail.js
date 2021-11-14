const API_KEY = 'AIzaSyDqDpDSzDOGu74rF5tHP2cFrNaixL0SZt0';
import axios from 'axios';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3/',
});
