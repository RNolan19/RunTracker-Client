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

  $('#add-run').trigger('reset')
}

const onAddRunFailure = function () {
  failureMessage('Add Run Failed')
  $('#add-run').trigger('reset')
}

const onViewRunsSuccess = function () {
  successMessage("Damn! That's a lot of running!")
}

const onViewRunsFailure = function () {
  failureMessage('Hmmmm. There seems to be a problem pulling up your runs')
}

module.exports = {
  onAddRunSuccess,
  onAddRunFailure,
  onViewRunsSuccess,
  onViewRunsFailure
}
