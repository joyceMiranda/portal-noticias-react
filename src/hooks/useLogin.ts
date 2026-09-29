import {
  useState
} from "react"

import { useNavigate } from "react-router"

function useLogin() {

  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")
  const [mensagem, setMensagem] = useState("")

  const navigate = useNavigate()

  function realizarLogin(evento: any) {

    evento.preventDefault()

    if (
      email == "adm@gmail.com" &&
      senha == "123456"
    ) {

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


  return {
    email,
    setEmail,
    senha,
    setSenha,
    mensagem,
    realizarLogin
  }
}

export default useLogin