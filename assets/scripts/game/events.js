'use strict'
const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

const onAddRun = function (event) {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)
  api.addRun(formData)
    .then(ui.onAddRunSuccess)
    .catch(ui.onAddRunFailure)
}

const onViewRuns = function (event) {
  event.preventDefault()
  api.onViewRuns()
    .then(ui.onViewRunsSuccess)
    .catch(ui.onViewRunsFailure)
}

const onDeleteRun = function (event) {
  event.preventDefault()
  const formData = getFormFields(event.target)
  api.onDeleteRun(formData)
    .then(ui.onDeleteRunSuccess)
    .catch(ui.onDeleteRunFailure)
}

const onUpdateRun = function (event) {
  event.preventDefault()
  const formData = getFormFields(event.target)
  api.onUpdateRun(formData)
    .then(ui.onUpdateRunSuccess)
    .catch(ui.onUpdateRunFailure)
}

module.exports = {
  onAddRun,
  onViewRuns,
  onDeleteRun,
  onUpdateRun
}
