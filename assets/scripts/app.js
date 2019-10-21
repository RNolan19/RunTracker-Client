'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('./auth/events')
const gameEvents = require('./game/events')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('submit', authEvents.onSignOut)

  $('#add-run').on('submit', gameEvents.onAddRun)
  $('#view-runs').on('submit', gameEvents.onViewRuns)
  $('#delete-run').on('submit', gameEvents.onDeleteRun)
  $('#update-run').on('submit', gameEvents.onUpdateRun)

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
})
