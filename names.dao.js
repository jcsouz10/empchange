const axios = require('axios');

module.exports = {
  employee() {
    return axios.get('http://localhost:3004/employee')
      .then(response => response.data)
      .catch(error => console.log(error))
  },
}