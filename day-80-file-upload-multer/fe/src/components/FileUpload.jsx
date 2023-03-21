import { useEffect } from "react"
import { useState } from "react"

export default function FileUpload() {
    const URL = "http://localhost:8080/fileUpload"
    const UPLOADSURL = "http://localhost:8080/uploads"
    const [imagesUrl, setImages] = useState([])
    const handleUploadFile = async (event) => {
        event.preventDefault()
        console.log(event.target.image.files[0])
        const data = new FormData()
        const files = event.target.image.files
        data.append("image", files[0])

        const options = {
            method: "POST",
            body: data
        }
        const FETCHED_DATA = await fetch(URL, options)
        const FETCHED_JSON = await FETCHED_DATA.json()
        console.log(FETCHED_JSON)
    }

    const fetchImage = async (event) => {
        const options = {
            method: "POST",
            body: []
        }
        const FETCHED_DATA = await fetch(UPLOADSURL, options)
        const FETCHED_JSON = await FETCHED_DATA.json()
        setImages(FETCHED_JSON.data)
        console.log(imagesUrl)
    }
    useEffect(() => {
        fetchImage()
    }, [])
    return (
        <div>
            <form method="post" encType="multipart/form-data" onSubmit={handleUploadFile} >
                <input type="file" name="image" />
                <button>Submit</button>
            </form>
            <div>
                <button onClick={fetchImage}>Fetch Image</button>
            </div>
            {imagesUrl && imagesUrl.map((image, index) => {
                return (
                    <div>
                        <img src={image} key={index} style={{ height: "250px" }} />
                    </div>
                )
            })}
        </div>
    )
}