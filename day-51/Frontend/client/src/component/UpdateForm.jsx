
export default function UpdateForm({ setCurrentData, currentData, setData }) {
    const UPDATE_URL = 'http://localhost:8080/data'


    async function sendPutRequest(data) {
        const options = {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data),
        }

        const FETCHED_DATA = await fetch(UPDATE_URL, options)
        const FETCHED_JSON = await FETCHED_DATA.json()
        setData(FETCHED_JSON)
        console.log(FETCHED_JSON)
    }

    function handleSubmit(e) {
        e.preventDefault()
        const sendData = {
            id: currentData.id,
            name: e.target.name.value,
            major: e.target.major.value,
        }
        sendPutRequest(sendData)
    }
    function handleFormName(e) {
        console.log(e.target.value)
        setCurrentData({ ...currentData, name: e.target.value })
    }
    function handleFormMajor(e) {
        console.log(e.target.value)
        setCurrentData({ ...currentData, major: e.target.value })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input placeholder="Name" name="name" value={currentData.name} onChange={handleFormName} />
                </label>
                <br />
                <label>
                    Major
                    <input placeholder="Major" name="major" value={currentData.major} onChange={handleFormMajor} />
                </label>
                <br />
                <button>Update</button>
            </form>
        </div>
    )
}