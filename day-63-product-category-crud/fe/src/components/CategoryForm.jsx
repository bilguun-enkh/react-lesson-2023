// import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

export default function () {


    const URL = 'http://localhost:8080/category'
    // const navigate = useNavigate()

    async function handleCategorySubmit(e) {
        e.preventDefault()
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                categoryName: e.target.catName.value,
                isEdit: false,
            })
        }

        const FETCHED_DATA = await fetch(URL, options)
        const FETCHED_JSON = await FETCHED_DATA.json()
        console.log(FETCHED_JSON)
        if (FETCHED_JSON.status === 'Success') {
            toast.success('Category added!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        } else {
            toast.error('Failed to add', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
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