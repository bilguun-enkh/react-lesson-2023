import { Link } from 'react-router-dom'

export default function Index() {


    const aboutPageData = {
        from: "Index ",
        messsage: "Welcome to About Page",
        timestamp: Date.now(),
    }

    const homePageData = {
        from: "Index",
        message: "Welcome to Home Page",
        timestamp: Date.now(),
    }
    return (
        <div>
            <h1>Day 44</h1>
            <nav>
                <Link to={'/about'} state={aboutPageData}>About Page</Link>
                <Link to={'home'} state={homePageData}>Home Page</Link>
                <Link to={'/accordion'}>Accordion Page</Link>
                <Link to={'/movies'}>Movies Page</Link>
                <Link to={'/gallery'}>Image Gallery Page</Link>
            </nav>
        </div>
    )
}