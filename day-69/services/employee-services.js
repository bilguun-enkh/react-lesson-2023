import { pool } from "../config/mysql-config.js";

export async function getEmployees() {
    const [rows] = await pool.query(`select * from employees limit 10`)
    console.log(rows)
    return rows;
}

export async function updateEmployee(empNo, lastName, gender) {
    // console.log(empNo, lastName, gender)
    const query = `UPDATE employees SET last_name=?, gender=? WHERE emp_no=?`
    const [rows] = await pool.query(query, [lastName, gender, empNo])
    return rows[0]

}

export async function getMaxNo() {
    const [rows] = await pool.query('SELECT MAX(emp_no) as max FROM employees')
    return rows[0]
}

export async function hireEmployee(emp_no, birthDate, firstName, lastName, gender, hireDate) {
    // const query = `INSERT INTO employees VALUES(${emp_no}, ${birthDate}, ${firstName}, ${lastName}, , '2010-01-01')`
    const query = `INSERT INTO employees VALUES( ?,?,?,?,?,?)`
    const [rows] = await pool.query(query, [emp_no, birthDate, firstName, lastName, gender, hireDate])
    return rows;
}

export async function fireEmployee(empNo) {
    const query = `DELETE FROM employees WHERE emp_no = ${empNo}`
    const [rows] = await pool.query(query)

    return rows;
}