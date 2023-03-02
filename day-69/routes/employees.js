import express from 'express'
const emp_router = express.Router()
import { getEmployees, hireEmployee, getMaxNo, fireEmployee, updateEmployee } from "../services/employee-services.js"


emp_router.get('/employees', async (request, response) => {

    const result = await getEmployees()
    console.log(result)
    response.status(200).send(result)
})

emp_router.put("/employee", async (request, response) => {
    const body = request.body
    console.log(body)
    const result = await updateEmployee(body.empNo, body.lastName, body.gender)
    response.status(200).send({ result })
})

emp_router.delete('/employee', async (request, response) => {

    const body = request.body
    console.log(body)

    const result = await fireEmployee(body.empNo)

    response.status(200).send(result)
})
emp_router.post('/employee', async (request, response) => {
    const { birthDate, firstName, lastName, gender, hireDate } = request.body
    const { max } = await getMaxNo()
    const result = await hireEmployee(
        max + 1,
        birthDate,
        firstName,
        lastName,
        gender,
        hireDate
    )


    response.status(200).send({})
})


export default emp_router