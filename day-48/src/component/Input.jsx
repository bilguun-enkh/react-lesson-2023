export default function Input({ labelText, handleChange, text }) {

    return (
        <div>
            <label>{labelText}</label>
            <input onChange={(e) => (handleChange(e))} value={text} />
        </div>
    )
}