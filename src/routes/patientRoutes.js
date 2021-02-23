'use strict';

// Importing functions from the controller
const { addPatient, addPatientTemperature, patientProfile } = require('../controllers/patientController');
const { protect } = require('../middlewares/protect')

// Importing the express router
const patientRouter = require('express').Router();

patientRouter.route('/')
  .post(protect, addPatient)

patientRouter.route('/:patientId')
  .get(protect, patientProfile)

patientRouter.route('/:patientId/temp/add')
  .post(protect, addPatientTemperature)

module.exports = patientRouter;
