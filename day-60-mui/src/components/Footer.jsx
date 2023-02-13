import { useTheme } from "../context/useTheme"

export default function Footer() {

    function handleSelectChange(e) {
        e.preventDefault()
        setTheme(e.target.value)
    }
    const { theme, setTheme } = useTheme()
    return (
        <div>
            <p>Footer</p>
            <select name="theme" onChange={handleSelectChange} defaultValue={theme}>
                <option value="dark">Dark</option>
                <option value="light">Light</option>
                <option value="green">Green</option>
            </select>
        </div>
    )
}