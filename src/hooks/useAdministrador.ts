import { useState } from "react"
import { useNavigate } from "react-router"

function useAdministrador() {

  const [nome, setNome] = useState("")
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")
  const [mensagem, setMensagem] = useState("")

  const navigate = useNavigate()

  function cadastrarAdministrador(evento: SubmitEvent) {

    evento.preventDefault()

    const administrador = {
      nome,
      email,
      senha
    }

    const listaAdministradores = JSON.parse(localStorage.getItem("listaAdministradores") || "[]"); 

    listaAdministradores.push(administrador)

    localStorage.setItem("listaAdministradores", JSON.stringify(listaAdministradores)
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

    const listaAdministradores = JSON.parse(localStorage.getItem("listaAdministradores") || "[]"); 

    return listaAdministradores;

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
