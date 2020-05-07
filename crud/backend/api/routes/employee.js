const express = require('express')
const { createEmployee, getAllEmployees, getEmployee, updateEmployee, deleteEmployee } = require('../controllers/employee')
const router = express.Router()

router.post('/employees', createEmployee)
router.get('/employees', getAllEmployees)
router.get('/employees/:id', getEmployee)
router.put('/employees/:id', updateEmployee)
router.delete('/employees/:id', deleteEmployee)


module.exports = router