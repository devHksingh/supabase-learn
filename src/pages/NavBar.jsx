import {  NavLink } from "react-router-dom"


const NavBar = () => {
  return (
    <header className="shadow sticky z-50 top-0 border-b text-2xl">
        <nav className="flex flex-wrap justify-between mx-auto p-4 gap-4">
            <h1>Supa Smoothies</h1>
            <div className="">
                <NavLink to={'/'} 
                className={({isActive})=>`mr-4 ${isActive ? `text-sky-400 border-b border-cyan-400 pb-1`:``}`}
                >Home</NavLink>
                <NavLink
                className={({isActive})=>`${isActive ? `text-sky-400 border-b border-cyan-400 pb-1`:``}`}
                to={'/create'}>Create New Smoothie</NavLink>
            </div>
        </nav>
        
    </header>
  )
}

export default NavBar