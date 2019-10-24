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

const onSignUpSuccess = function () {
  successMessage('Signed up successfully!')
  $('#sign-up').hide()
  $('.h2signup').hide()
  $('#sign-up').trigger('reset')
}

const onSignUpFailure = function () {
  failureMessage('Sign Up Failed')
  $('#sign-up').trigger('reset')
}

const onSignInSuccess = function (responseData) {
  successMessage('Signed in successfully!')
  // save the user we got from the API inside of 'store', so we can use it later
  // from any file
  store.user = responseData.user

  //  a good place to hide the sign in button
  $('#sign-in').hide()
  $('#sign-up').hide()
  $('.h2signin').hide()
  $('.h2signup').hide()

  $('#change-password').show()
  $('.h2changepassword').show()
  $('#sign-out').show()
  $('.h2signout').show()
  $('#add-run').show()
  $('.h2addrun').show()
  $('#view-runs').show()
  $('.h2viewruns').show()
  $('#delete-run').show()
  $('.h2deleterun').show()
  $('#update-run').show()
  $('.h2updaterun').show()
}

const onSignInFailure = function () {
  failureMessage('Sign In Failed')
  $('#sign-in').trigger('reset')
}

const onChangePasswordSuccess = function () {
  successMessage('Password changed successfully!')
  $('#change-password').trigger('reset')
}

const onChangePasswordFailure = function () {
  failureMessage('Password change Failed.  Please try again')
  $('#change-password').trigger('reset')
}

const onSignOutSuccess = function (responseData) {
  successMessage('Signed out successfully!')
  $('.content').empty()

  $('#sign-in').show()
  $('#sign-in').trigger('reset')
  $('#sign-up').show()
  $('.h2signin').show()
  $('.h2signup').show()

  $('#change-password').hide()
  $('.h2changepassword').hide()
  $('#sign-out').hide()
  $('.h2signout').hide()
  $('#add-run').hide()
  $('.h2addrun').hide()
  $('#view-runs').hide()
  $('.h2viewruns').hide()
  $('#delete-run').hide()
  $('.h2deleterun').hide()
  $('#update-run').hide()
  $('.h2updaterun').hide()

}

const onSignOutFailure = function () {
  failureMessage('Sign Out Failed')
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure,
  onSignOutSuccess,
  onSignOutFailure
}
