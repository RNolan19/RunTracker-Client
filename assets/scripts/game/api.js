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

const onViewRuns = function () {
// we make a request to out API and we MUST RETURN the result.
  return $.ajax({
    // The method is which HTTP verb to use when making the request.catch
    // We use POST because our documentation told us to.  APIs will have documentation
    method: 'GET',
    // the url our API is expecting when we create a new example.
    // We use '/examples' because our documentation told us to. OBEY THE API's instructions
    url: config.apiUrl + '/runs',
    // This is our authorization header. It tells the API who we are by using our user's token to identify us
    // our API needs to know who we are to create anything.  You need a token to create anything.
    headers: {
      // the token was saved in the store when we signed up
      // we access it through store.user.token
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  addRun,
  onViewRuns
}
