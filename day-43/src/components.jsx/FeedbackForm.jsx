import { useState } from 'react'

function FeedbackForm() {
    const [isSending, setIsSending] = useState(false)
    const [text, setText] = useState("")
    const [isSent, setIsSent] = useState(false)

    function sendMessage(text) {
        return new Promise(resolve => {
            setTimeout(resolve, 2000);
        });
    }
    async function handleSubmit(event) {
        event.preventDefault()
        setIsSending(true)
        await sendMessage(text)
        setIsSending(false)
        setIsSent(true)
    }
    if (isSent) {
        return <h2>Thanks for the feedback</h2>
    }
    return (
        <div className="App">
            <form onSubmit={handleSubmit}>
                <h1>Please enter your text.</h1>
                <div>
                    <textarea name="textarea"
                        value={text}
                        onChange={event => setText(event.target.value)}>
                    </textarea>
                </div>
                <button>Send</button>
            </form>
            {isSending && <p>Sending ....</p>}
        </div>
    );
}
export default FeedbackForm