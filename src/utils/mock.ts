import axios from '../mock/index';

axios.get('/api/user').then(response => {
    console.log(response.data);
});