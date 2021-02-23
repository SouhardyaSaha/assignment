const Patient = require("../models/patient")
const Temperature = require("../models/temperature")
const User = require("../models/user")

User.hasMany(Patient, { foreignKey: { allowNull: false }, onDelete: 'cascade', onUpdate: 'cascade' })
Patient.belongsTo(User, { foreignKey: { allowNull: false }, onDelete: 'cascade', onUpdate: 'cascade' })

Patient.hasMany(Temperature, { foreignKey: { allowNull: false }, onDelete: 'cascade', onUpdate: 'cascade' })
Temperature.belongsTo(Patient, { foreignKey: { allowNull: false }, onDelete: 'cascade', onUpdate: 'cascade' })
