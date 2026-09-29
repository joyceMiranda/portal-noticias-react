import Menu from "../components/Menu"

function Home() {
  return (
    <>
      <h1 >
        Portal de Notícias
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

    </>
  )
}

export default Home