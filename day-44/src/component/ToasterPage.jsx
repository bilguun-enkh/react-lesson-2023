import { ToastContainer, toast } from 'react-toastify'

export default function ToasterPage() {
    const notify = () => toast("Saved")
    return (
        <div>
            <button onClick={notify}>Notify</button>
            <ToastContainer />
        </div>
    )
}