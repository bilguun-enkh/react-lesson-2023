export default function Buttons(props: any) {
    return (
        <div>
            <button className="button">{props.children}</button>
            <style jsx>
                {`
                    .button{
                        padding: 1em;
                        border-radius: 1em;
                        border: none;
                        background: green;
                        color: white
                    }
                `}
            </style>
        </div>
    )
}