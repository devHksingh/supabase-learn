import {  NavLink } from "react-router-dom"


const NavBar = () => {
  return (
    <header className="shadow sticky z-50 top-0 border-b text-2xl">
        <nav className="flex flex-wrap justify-between items-center mx-auto  gap-4">
            <h1>Supa Smoothies</h1>
            <div className="">
                <NavLink to={'/'} 
                className={({isActive})=>`mr-4 ${isActive ? `text-orange-600 border-b border-slate-200 pb-1`:``}`}
                >Home</NavLink>
                <NavLink
                className={({isActive})=>`${isActive ? `text-orange-600 border-b border-slate-200 pb-1`:``}`}
                to={'/create'}>Create New Smoothie</NavLink>
            </div>
        </nav>
        
    </header>
  )
}

export default NavBar