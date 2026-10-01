import { useNavigate } from "react-router"
import { useEffect } from "react"
import MenuAdm from "../components/MenuAdm"

function Adm() {

  const navigate = useNavigate()

  /*executado uma vez na montagem no componente*/
  useEffect(() => {

    const usuarioLogado =
      localStorage.getItem("usuarioLogado")

    if (usuarioLogado !== "sim") {
      navigate("/login")
    }

  }, [])


  return (
    <>

        <h1 className="destaque">
          Área Administrativa
        </h1>
      
      <main id="conteudoPrincipal">

        <MenuAdm />

      </main>
    </>
  )
}

export default Adm