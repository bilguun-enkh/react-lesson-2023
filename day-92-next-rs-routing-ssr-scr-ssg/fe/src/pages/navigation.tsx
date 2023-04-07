import { useRouter } from "next/router"
import styles from '@/styles/Home.module.css'
import React from "react"
export default function NavigationPage(): JSX.Element {
    const [navigate, setNavigate] = React.useState(false)

    const router = useRouter()

    React.useEffect(() => {
        if (navigate) {
            router.push("/contact")
        }
    }, [navigate])

    return (
        <div className="flex justify-between text-white">
            <button>What's the Tomatometer</button>
            <button onClick={() => setNavigate(true)}>Contact</button>
            <button>LOGIN/SIGNUP</button>
        </div>
    )
}