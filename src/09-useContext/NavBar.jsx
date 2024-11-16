import { Link, NavLink } from "react-router-dom"
// ¡ El navLink se usa cuando necesitamos que el Link reaccione a la ruta en la que se encuentra

export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark rounded-3">
      <div className="container-fluid">

        <Link className="navbar-brand" to="/">useContext</Link>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">

          <ul className="navbar-nav me-auto mb-2 mb-lg-0">

            <NavLink 
              className={({isActive}) => `nav-link ${ isActive ? 'active' : '' }`}
              to="/"
            >
                Home
            </NavLink>

            <NavLink 
              className={({isActive}) => `nav-link ${ isActive ? 'active' : '' }`}
              to="/About"
            >
                About
            </NavLink>

            
            <NavLink 
              className={({isActive}) => `nav-link ${ isActive ? 'active' : '' }`}
              to="/Login"
            >
                Login
            </NavLink>

          </ul>
        </div>
      </div>
    </nav>
  )
}
