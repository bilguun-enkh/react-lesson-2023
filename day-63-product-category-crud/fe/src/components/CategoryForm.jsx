import { useNavigate } from 'react-router-dom'

export default function () {


    const URL = 'http://localhost:8080/category'
    const navigate = useNavigate()

    async function handleCategorySubmit(e) {
        e.preventDefault()
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                catName: e.target.catName.value
            })
        }

        const FETCHED_DATA = await fetch(URL, options)
        const FETCHED_JSON = await FETCHED_DATA.json()
        console.log(FETCHED_JSON)
        // if (FETCHED_JSON.status === 'Success') {
        //     navigate("/category/list")
        // }
    }

    return (
        <div>
            <h1>Category Form</h1>
            <form onSubmit={handleCategorySubmit}>
                <input name='catName' type='text' />
                <button>Submit</button>
            </form>
        </div>
    )
}