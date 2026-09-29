import { useState } from "react"

function useAcessibilidade() {
  const [menuAberto, setMenuAberto] = useState(false)
  const [contraste, setContraste] = useState(false)
  const [zoom, setZoom] = useState(100)

  function abrirMenu() {
    setMenuAberto(!menuAberto)
  }

  function aumentarFonte() {
    const novoZoom = zoom + 10

    document.body.style.zoom = novoZoom + "%"

    setZoom(novoZoom)
    }

    function diminuirFonte() {
    const novoZoom = zoom - 10

    document.body.style.zoom = novoZoom + "%"

        setZoom(novoZoom)

    }

  function alterarContraste() {
    setContraste(!contraste)
    document.body.classList.toggle("contraste")
  }

  return {
    menuAberto,
    abrirMenu,
    aumentarFonte,
    diminuirFonte,
    alterarContraste
  }
}

export default useAcessibilidade