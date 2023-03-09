import express from 'express'
const emp_router = express.Router()
import { getEmployees, hireEmployee, getMaxNo, fireEmployee, updateEmployee } from "../services/employee-services.js"
import { getPopularCategories } from '../services/category.services.js'
import { getParentMenus, getChildrenMenus } from '../services/menus-services.js'
const apiRouter = express.Router()


apiRouter.get('/popular', async (request, response) => {

    const result = await getPopularCategories()
    console.log(result)
    response.status(200).send(result)
})

apiRouter.get('/menus', async (request, response) => {

    const parentMenus = await getParentMenus()

    await Promise.all(
        parentMenus.map(async (parent) => {
            const children = await getChildrenMenus(parent.id)
            parent.children = children
            return parent
        })
    )
    response.status(200).send([])
}
)


// emp_router.get('/employees', async (request, response) => {

//     const result = await getEmployees()
//     console.log(result)
//     response.status(200).send(result)
// })

// emp_router.put("/employee", async (request, response) => {
//     const body = request.body
//     console.log(body)
//     const result = await updateEmployee(body.empNo, body.lastName, body.gender)
//     response.status(200).send({ result })
// })

// emp_router.delete('/employee', async (request, response) => {

//     const body = request.body
//     console.log(body)

//     const result = await fireEmployee(body.empNo)

//     response.status(200).send(result)
// })
// emp_router.post('/employee', async (request, response) => {
//     const { birthDate, firstName, lastName, gender, hireDate } = request.body
//     const { max } = await getMaxNo()
//     const result = await hireEmployee(
//         max + 1,
//         birthDate,
//         firstName,
//         lastName,
//         gender,
//         hireDate
//     )


//     response.status(200).send({})
// })


export default emp_router