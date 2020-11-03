import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID qt3JT4Ll2evRmjtYVDPDP0huYsw-nr_ptMf0neD6VM0'
  }
});
