import { useState } from "react"

function useAcessibilidade() {
  const [menuAberto, setMenuAberto] = useState(false)
  const [tamanhoFonte, setTamanhoFonte] = useState(15)
  const [contraste, setContraste] = useState(false)

  function alterarMenu() {
    setMenuAberto(!menuAberto)
  }

  function aumentarFonte() {
    const novoTamanho = tamanhoFonte + 2
    setTamanhoFonte(novoTamanho)
    document.body.style.fontSize = novoTamanho + "px"
  }

  function diminuirFonte() {
    const novoTamanho = tamanhoFonte - 2
    setTamanhoFonte(novoTamanho)
    document.body.style.fontSize = novoTamanho + "px"
  }

  function alterarContraste() {
    setContraste(!contraste)
    document.body.classList.toggle("contraste")
  }

  return {
    menuAberto,
    alterarMenu,
    aumentarFonte,
    diminuirFonte,
    alterarContraste
  }
}

export default useAcessibilidade