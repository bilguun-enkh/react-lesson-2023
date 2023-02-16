import { useEffect } from "react"
import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
export default function CategoryEditForm() {
    const { id } = useParams()
    const URL = 'http://localhost:8080/category'
    const [category, setCategory] = useState({
        name: 'Test'
    })
    const navigate = useNavigate

    useEffect(() => {
        fetchCategory()
    }, [])

    async function fetchCategory() {

        const options = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                categoryId: id
            })
        }

        const FETCHED_DATA = await fetch(URL, options)
        const FETCHED_JSON = await FETCHED_DATA.json()
        if (FETCHED_JSON.status === "Success") {
            setCategory(FETCHED_JSON.data)
        }
    }

    function handleInputChange(e) {
        setCategory(e.target.value)
    }


    async function handleEditSubmit(e) {
        e.preventDefault()

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                categoryId: id,
                categoryName: e.target.categoryName.value,
                isEdit: true,
            }),
        }

        console.log(e.target.categoryName.value)
        const FETCHED_DATA = await fetch(URL, options)
        const FETCHED_JSON = await FETCHED_DATA.json()
        if (FETCHED_JSON.status === 'Success') {
            navigate('/category/list')
        }
    }

    return (
        <div>
            <h1>Category Edit Form</h1>
            <form onSubmit={handleEditSubmit}>
                <input name='categoryName' value={category.name} onChange={handleInputChange} />
                <br />
                <button>Save Edit</button>
            </form>
        </div>
    )
}