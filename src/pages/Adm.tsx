import { useNavigate } from "react-router"
import Menu from "../components/Menu"
import { useEffect } from "react"

function Adm() {

  const navigate = useNavigate()

  useEffect(() => {

    const usuarioLogado =
      localStorage.getItem("usuarioLogado")

    if (usuarioLogado !== "sim") {
      navigate("/login")
    }

  }, [navigate])
  return (
    <>
      
      <main id="conteudoPrincipal">

        <h1 className="destaque">
          Área Administrativa
        </h1>

        <Menu />

        <p>
          Em breve será exibido o conteúdo da área administrativa.
        </p>

      </main>
    </>
  )
}

export default Adm