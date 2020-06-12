import axios from 'axios';

const api = axios.create({
	baseURL:
		'https://raw.githubusercontent.com/rodrigobarros2/challenge/master/front-end/assets/products.json',
});

export default api;
