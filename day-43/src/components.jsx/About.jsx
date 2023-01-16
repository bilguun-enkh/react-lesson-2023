import {Outlet} from 'react-router-dom'
import { Link } from "react-router-dom";

export default function About() {
    return (
        <div>
            <h1>It is about about</h1>
            <Link to={"/about/usukhuu"}>Usukhuu</Link>
            <Link to={"/about/Khangai"}>Khangai</Link>
            <Outlet />
        </div>
    )
}