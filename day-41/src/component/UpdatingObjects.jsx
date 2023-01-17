import { useState } from "react"

export default function UpdatingObjects() {

    // let user = {
    //     age: 18,
    //     name: "Dorj",
    // }
    // user.age = 20

    let [user, setUser] = useState({
        age: 18,
        name: "Dorj",
    })

    let check = () => {
        // user.age += 20
        // setUser({age: user.age + 20, name: "Dorj"})
        const newUser = {...user}
        newUser.age += 20
        setUser(newUser)
    }

    return (
        <div>
            <button
                onClick={check}>
                User age is {user.age}
            </button>
        </div>
    )
}