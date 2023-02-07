export default function Books({ item }) {
    return (
        <li>
            {item.title} - {item.price}
        </li>
    )
}