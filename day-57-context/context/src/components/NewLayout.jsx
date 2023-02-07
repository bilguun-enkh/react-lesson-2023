import Header from "./Header"

export default function NewLayout({ children }) {
    return (
        <div>
            <Header />
            <main>{children}</main>
        </div>
    )
}