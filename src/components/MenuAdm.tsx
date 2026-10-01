import { Link } from "react-router"

function MenuAdm() {
  return (
    <nav className="menu">
      <p>

        <Link
          to="/telaCadastroAdm"
          className="botao-menu"
        >
          Cadastro de Administrador
        </Link>
      </p>

    </nav>
  )
}

export default MenuAdm