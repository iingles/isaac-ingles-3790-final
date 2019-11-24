const axios = require('axios');
const querystring = require('querystring');
const apiUrl = 'https://cors-anywhere.herokuapp.com/https://uinames.com/api/';
const apikey = '';
export const searchMixin = {

    methods: {
      getHeaders(searchData) {
            return searchData.keys
      },
      searchItems(data) {
        let params = Object.assign({}, data);
        params['api-key'] = apikey;
        Object.keys(params).forEach(key => {
            if (!params[key]) {
                delete params[key];
            }
        })
            // const queryString = querystring.stringify(params);
            return axios.get(apiUrl);
        }
    }
}