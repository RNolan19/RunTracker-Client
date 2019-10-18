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

module.exports = {
  onAddRun
}
