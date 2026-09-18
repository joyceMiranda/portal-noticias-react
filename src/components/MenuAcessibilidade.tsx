import useAcessibilidade from "../hooks/useAcessibilidade"
import "../styles/menuAcessibilidade.css"

function MenuAcessibilidade() {

  const {
    menuAberto,
    abrirMenu,
    aumentarFonte,
    diminuirFonte,
    alterarContraste
  } = useAcessibilidade()

  return (
    <div>

      <a
        href="#conteudoPrincipal"
        className="skipLink"
      >
        Ir para conteúdo principal
      </a>

      <br />

      <button
        id="btnAcessibilidade"
        onClick={abrirMenu}
        aria-expanded={menuAberto}
      >
        <img
          src="/acessibilidade.png"
          alt="Símbolo universal de acessibilidade"
          width="24"
        />
      </button>

      <div
        id="menuAcessibilidade"
        hidden={!menuAberto}
      >
        <button onClick={aumentarFonte}>
          Aumentar Fonte
        </button>

        <button onClick={diminuirFonte}>
          Diminuir Fonte
        </button>

        <button onClick={alterarContraste}>
          Alterar Contraste
        </button>
      </div>

    </div>
  )
}

export default MenuAcessibilidade