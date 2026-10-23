import {
  useState
} from "react"

import { useNavigate } from "react-router"
import type Administrador from "../interfaces/Administrador"

function useLogin() {

  const [id, setId] = useState("")
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")
  const [mensagem, setMensagem] = useState("")

  const navigate = useNavigate()

  function realizarLogin(evento: React.SubmitEvent<HTMLFormElement>) {

    evento.preventDefault()

    const listaAdministradores = JSON.parse(
      localStorage.getItem("listaAdministradores") || "[]"
    )

    const administrador = listaAdministradores.find(
      (adm: Administrador) => adm.id == id && adm.senha == senha
    )



    if (administrador) {

      setMensagem(
        "Login realizado com sucesso"
      )

      localStorage.setItem(
        "usuarioLogado",
        "sim"
      )

      setTimeout(() => {
        navigate("/adm")
      }, 1000)

    }
    else {

      setMensagem(
        "E-mail ou senha incorretos"
      )

    }
  }

  function realizarLogout() {
    localStorage.removeItem("usuarioLogado")
  }


  return {
    id,
    setId,
    email,
    setEmail,
    senha,
    setSenha,
    mensagem,
    realizarLogin,
    realizarLogout
  }
}

export default useLogin