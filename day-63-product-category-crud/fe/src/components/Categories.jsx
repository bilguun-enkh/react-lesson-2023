import { useEffect } from "react"
import { useState } from "react"

export default function Categories() {

    const [categories, setCategories] = useState([])
    const URL = 'http://localhost:8080/category'

    useEffect(() => {
        fetchCategories()
    }, [])

    async function fetchCategories() {
        const FETCHED_DATA = await fetch(URL)
        const FETCHED_JSON = await FETCHED_DATA.json()
        if (FETCHED_JSON.status === 'success') {
            setCategories(FETCHED_JSON.data)
        }
    }

    return (
        <div>
            <h1>Categories</h1>
            <table className="table-class">
                <thead>
                    <tr>
                        <td>Category ID</td>
                        <td>Category name</td>
                        <td>Edit</td>
                        <td>Delete</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Test</td>
                        <td>
                            <button>Edit</button>
                        </td>
                        <td>
                            <button>Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}