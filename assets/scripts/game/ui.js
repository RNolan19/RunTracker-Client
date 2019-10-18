'use strict'
// require store object, so we can keep track of the user and their unique token
const store = require('../store')

const successMessage = function (newText) {
  $('#message').text(newText)
  $('#message').removeClass('failure')
  $('#message').addClass('success')
}

const failureMessage = function (newText) {
  $('#message').text(newText)
  $('#message').removeClass('success')
  $('#message').addClass('failure')
}

const onAddRunSuccess = function () {
  successMessage('Run Added successfully!')
  $('#sign-up').hide()

  $('#sign-up').trigger('reset')
}

const onAddRunFailure = function () {
  failureMessage('Add Run Failed')
  $('#sign-up').trigger('reset')
}

module.exports = {
  onAddRunSuccess,
  onAddRunFailure
}
