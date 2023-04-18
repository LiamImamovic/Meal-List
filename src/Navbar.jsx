import { Link } from "react-router-dom"

const Navbar = () => {
    return(
        <nav className="nav">
            <Link to="/" className="site-title">Mon Gourmand</Link>
            <ul className="nav-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/meallist">Meal List</Link></li>
                <li><Link to="/mealcreate">Create a Meal</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar