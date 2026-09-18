import Menu from "../components/Menu"
import Rodape from "../components/Rodape"

function Home() {
  return (
    <>
      <h1 >
        Página de Notícias
      </h1>

      <Menu />

      <main id="conteudoPrincipal">
        <h2 className="destaque">
          Notícias
        </h2>

        <p>
          Em breve serão exibidas as notícias.
        </p>
      </main>

      <Rodape />
    </>
  )
}

export default Home