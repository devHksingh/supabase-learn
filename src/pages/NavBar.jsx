import { Link } from "react-router-dom"


const NavBar = () => {
  return (
    <header>
        <nav>
            <h1>Supa Smoothies</h1>
            <div>
                <Link to={'/'}>Home</Link>
                <Link to={'/create'}>Create New Smoothie</Link>
            </div>
        </nav>
        
    </header>
  )
}

export default NavBar