import { useState } from "react"
import { useNavigate } from "react-router"

function useAdministrador() {

  const [nome, setNome] = useState("")
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")
  const [mensagem, setMensagem] = useState("")

  const navigate = useNavigate()

  function cadastrarAdministrador(evento: any) {

    evento.preventDefault()

    const administrador = {
      nome,
      email,
      senha
    }

    const administradoresSalvos = localStorage.getItem("administradores")

    const administradores = administradoresSalvos ? JSON.parse(administradoresSalvos) : []

    administradores.push(administrador)

    localStorage.setItem("administradores", JSON.stringify(administradores)
    )

    setMensagem("Administrador cadastrado com sucesso!")

    setTimeout(() => {
        limparCampos()
        navigate("/telaCadastroAdm")
      }, 1000)
  }

  function limparCampos() {
    setNome("")
    setEmail("")
    setSenha("")
    setMensagem("")
  }

  function consultarAdministradores() {

    const administradoresSalvos = localStorage.getItem("administradores")

    if (administradoresSalvos) {
      return JSON.parse(administradoresSalvos)
    }

    return []
  }


    return {
      nome,
      setNome,
      email,
      setEmail,
      senha,
      setSenha,
      mensagem,
      setMensagem,
      cadastrarAdministrador,
      consultarAdministradores
    }
}

export default useAdministrador
