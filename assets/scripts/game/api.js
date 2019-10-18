const config = require('../config')
const store = require('../store')

const addRun = function (formData) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/runs',
    headers: {
      // the token was saved in the store when we signed up
      // we access it through store.user.token
      Authorization: 'Token token=' + store.user.token
    },
    data: formData
  })
}

module.exports = {
  addRun
}
