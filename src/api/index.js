import axios from 'axios';

const config = {
    baseUrl: "https://api.hnpwa.com/v0"
}

function fetchNewsList() {
    console.log(config.baseUrl + '/news/1.json');
    return axios.get(`${config.baseUrl}/news/1.json`);
}

export {
    fetchNewsList
}