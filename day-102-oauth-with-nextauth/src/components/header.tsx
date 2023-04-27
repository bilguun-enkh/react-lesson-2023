import { signIn, signOut, useSession } from "next-auth/react"
import styles from "../styles/header.module.css"
export default function Header() {
    const { data: session, status } = useSession()
    const loading = status === "loading"
    const handleLogin = (e: any) => {
        e.preventDefault()
        signIn()
    }
    console.log(session)
    const handleLogout = (e: any) => {
        e.preventDefault()
        signOut()
    }
    return (
        <header>
            <noscript>
                <style>{`.nojs-show {opacity: 1; top: 0; }`}</style>
            </noscript>
            <div className={styles.signInStatus}>
                <div className={`nojs-show ${!session && loading ? styles.loading : styles.load}`}>
                    <div>
                        {!session && (
                            <div>
                                <span>You are not signed in.    </span>
                                <a href={`/api/auth/signin`} onClick={handleLogin} >
                                    Sign In
                                </a>
                            </div>
                        )}
                        {session?.user && (
                            <div>
                                {session.user.image && (
                                    <div>
                                        <span style={{ backgroundImage: `url(${session.user.image})` }} className={styles.avatar} />
                                        <small>
                                            Signed in as <br />
                                            <strong>{session.user.name}</strong>
                                        </small>
                                    </div>
                                )}
                            </div>
                        )}
                        <a href="" onClick={handleLogout} className={styles.button}>Sign Out</a>
                    </div>
                </div>
            </div>
        </header>
    )
}