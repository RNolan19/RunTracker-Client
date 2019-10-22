'use strict'
// require store object, so we can keep track of the user and their unique token
const store = require('../store')
const showRunsTemplate = require('../templates/run-listing.handlebars')

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
  $('.content').empty()

  $('#add-run').trigger('reset')
}

const onAddRunFailure = function () {
  failureMessage('Add Run Failed')
  $('#add-run').trigger('reset')
}

const onViewRunsSuccess = (data) => {
  store.runs = data.runs
  console.log(data)
  const showRunsHtml = showRunsTemplate({ runs: data.runs })
  $('.content').empty()
  $('.content').append(showRunsHtml)
}

const onViewRunsFailure = function () {
  failureMessage('Hmmmm. There seems to be a problem pulling up your runs')
}

const onDeleteRunSuccess = function () {
  successMessage('Run Deleted Successfully')
  $('#delete-run').trigger('reset')
  $('.content').empty()
}

const onDeleteRunFailure = function () {
  failureMessage('Delete Run Failed')
  $('#delete-run').trigger('reset')
}

const onUpdateRunSuccess = function () {
  successMessage('Run Updated Successfully')
  $('#update-run').trigger('reset')
  $('.content').empty()
}

const onUpdateRunFailure = function () {
  failureMessage('Updated Run NOT Added.  Try Again')
  $('#update-run').trigger('reset')
}

module.exports = {
  onAddRunSuccess,
  onAddRunFailure,
  onViewRunsSuccess,
  onViewRunsFailure,
  onDeleteRunSuccess,
  onDeleteRunFailure,
  onUpdateRunSuccess,
  onUpdateRunFailure
}
