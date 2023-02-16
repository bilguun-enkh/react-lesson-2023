import { useEffect } from "react"
import { useState } from "react"
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';

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

    async function handleCategoryDelete(categoryId) {
        console.log(categoryId)
        const options = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                categoryId: categoryId
            })
        }
        const FETCHED_DATA = await fetch(URL, options)
        const FETCHED_JSON = await FETCHED_DATA.json()
        if (FETCHED_JSON.status === 'Success') {
            setCategories(FETCHED_JSON.data)
            toast.success('Deleted!', {
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
            toast.error('Failed', {
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

    async function handleSearchSubmit(e) {
        e.preventDefault()
        const searchInput = e.target.search.value
        const SEARCH_URL = `http://localhost:8080/search?value=${searchInput}`
        const FETCHED_DATA = await fetch(SEARCH_URL)
        const FETCHED_JSON = await FETCHED_DATA.json()
        if (FETCHED_JSON.status === 'Success') {
            setCategories(FETCHED_JSON.data)
        }

    }

    return (
        <div>
            <h1>Categories</h1>
            <form onSubmit={handleSearchSubmit}>
                <input placeholder="Search" name='search' /><button>Search</button>
            </form>
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
                    {
                        categories && categories.map((category, index) => {
                            const EDIT_URL = ``
                            return (

                                <tr key={index}>
                                    <td>{category.id}</td>
                                    <td>{category.name}</td>
                                    <td>
                                        <Link to={`/category/edit/${category.id}`}>Edit</Link>
                                    </td>
                                    <td>
                                        <button onClick={() => handleCategoryDelete(category.id)}>Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}