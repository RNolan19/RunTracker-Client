'use strict'

let apiUrl
const apiUrls = {
  production: '<https://tranquil-lake-32578.herokuapp.com>',
  development: 'http://localhost:4741'
}

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

module.exports = {
  apiUrl
}
