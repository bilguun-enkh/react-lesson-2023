import axios from "axios"

async function fetchAllData(URL, setUsers) {
    const FETCHED_DATA = await axios.get(URL)
    // const FETCHED_JSON = await FETCHED_DATA.json()
    setUsers(FETCHED_DATA.data.data)
}

async function deleteUser(userId, URL, setUsers) {

    const FETCHED_DATA = await axios({
        url: URL, method: 'DELETE',
        data: {
            userId: userId
        }
    })
    setUsers(FETCHED_DATA.data.data)
}

async function updateUser(e, URL, setUsers) {
    const postData = {
        username: e.target.username.value,
        age: e.target.age.value,
    }
    const options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(postData)
    }
    const FETCHED_DATA = await axios({
        url: URL, method: 'PUT',
    })
    // const FETCHED_JSON = await FETCHED_DATA.json()
    setUsers(FETCHED_DATA.data.data)
}

async function createUser(currentUser, URL, setUsers, setIsUpdate, setCurrentUser, newUser) {
    const putData = {
        id: currentUser.id,
        username: currentUser.username,
        age: currentUser.age,
    }
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(putData)
    }
    const FETCHED_DATA = await axios({
        url: URL, method: 'POST'
    })
    // const FETCHED_JSON = await FETCHED_DATA.json()
    setUsers(FETCHED_DATA.data.data)
    setIsUpdate(false)
    setCurrentUser(newUser)
}


export { fetchAllData, deleteUser, updateUser, createUser }