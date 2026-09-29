import { Link } from "react-router"

function Menu() {
  return (
    <nav className="menu">
      <p>
        <Link
          to="/"
          className="botao-menu"
        >
          Home
        </Link>
        

        <Link
          to="/login"
          className="botao-menu"
        >
          Login
        </Link>
      </p>

    </nav>
  )
}

export default Menu