const fetch = require('node-fetch');

const fetchUserFromApi = (userId) => {
  return fetch(`https://api.example.com/users/${userId}`)
    .then(response => response.json())
    .catch(error => {
      console.error('Error fetching user:', error);
      throw error;
    });
};

module.exports = fetchUserFromApi;
