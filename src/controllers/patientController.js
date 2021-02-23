const Patient = require("../models/patient");
const Temperature = require("../models/temperature");
const { Op } = require('sequelize')
const catchAsync = require("../utils/catchAsync");

const addPatient = catchAsync(async (req, res, next) => {
    const patient = await req.user.createPatient(req.body)
    res.json({
        status: 'success',
        data: {
            patient
        }
    })
});

const addPatientTemperature = catchAsync(async (req, res, next) => {
    const { patientId } = req.params
    // const patient = await Patient.findByPk(patientId)
    // const temperature = await patient.createTemperature(req.body)
    const temperature = await Temperature.create({ ...req.body, userId: req.user.id, patientId })

    res.json({
        status: 'success',
        temperature
    })
});

const patientProfile = catchAsync(async (req, res, next) => {
    const { patientId } = req.params
    let { startDate, endDate } = req.query

    const options = {
        where: {
            patientId
        }
    }

    if (startDate && endDate) {
        startDate = new Date(startDate)
        endDate = new Date(endDate)
        endDate.setDate(endDate.getDate() + 1)

        // console.log(startDate, endDate);

        options.where.createdAt = {
            [Op.between]: [startDate, endDate]
        }
    }

    const patient = await Patient.findByPk(patientId)
    const temperatures = await Temperature.findAll(options)
    const max_temperature = await Temperature.max('temp', options)
    const min_temperature = await Temperature.min('temp', options)
    const temp_count = await Temperature.count(options)
    const temp_sum = await Temperature.sum('temp', options)
    const temp_average = temp_sum / temp_count

    let data = {
        patient: {
            max_temperature,
            min_temperature,
            temp_count,
            temp_average,
            ...patient.toJSON(),
            temperatures
        }
    }

    // data.patient.max_temperature = max_temperature
    // data.patient.min_temperature = min_temperature

    res.json({
        status: 'success',
        data
    })
});

module.exports = {
    addPatient,
    addPatientTemperature,
    patientProfile
}