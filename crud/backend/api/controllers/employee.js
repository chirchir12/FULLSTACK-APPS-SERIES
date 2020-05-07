const Employee = require('../../models').Employee;


exports.createEmployee = (req, res) => {
    return Employee.create(req.body)
        .then(createdUser => res.status(201).json({ message: "recorded Added Successfully" }))
        .catch(error => res.status(400).json({ error: error }))

}

exports.getAllEmployees = (req, res) => {
    return Employee.findAll({
        attributes: [
            "id",
            'firstName',
            'lastName',
            'email',
            'phone',
            'address',
        ]
    }).then(allEmployees => res.status(200).json(allEmployees))
        .catch(error => res.status(404).json({ errors: error }))

}

exports.getEmployee = (req, res) => {
    return Employee.findByPk(req.params.id)
        .then(employee => res.status(200).json(employee))
        .catch(error => res.status(404).json({ error: error }))

}

exports.updateEmployee = async (req, res) => {
    let employee = await Employee.findByPk(req.params.id)
    if (!employee) {
        return req.status(404).json({ message: 'could not be found' })
    } console.log({ ...req.body, id: req.params.id, createdAt: employee.dataValues.createdAt, updatedAt: employee.dataValues.updatedAt })
    return Employee.update(req.body, {
        where: {
            id: req.params.id
        }
    }).then(employee => res.status(200).json(employee))
        .catch(error => res.status(400).json({ error: error }))
}

exports.deleteEmployee = (req, res) => {
    let employee = Employee.findByPk(req.params.id)
    if (!employee) {
        return req.status(404).json({ message: 'could not be found' })
    }
    return Employee.destroy({ where: { id: req.params.id } })
        .then(() => res.status(200).json({ message: 'record deleted' }))
        .catch(error => res.status(400).json({ error: error }))

}