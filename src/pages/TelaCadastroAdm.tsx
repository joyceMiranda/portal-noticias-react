import { useLocation } from "react-router"
import MenuAdm from "../components/MenuAdm"
import useAdministrador from "../hooks/useAdministrador"
import { useEffect } from "react"

function TelaCadastroAdm() {

   const {
    id,
    setId,
    nome,
    setNome,
    email,
    setEmail,
    senha,
    setSenha,
    mensagem,
    cadastrarAdministrador,
    alterarAdministrador
  } = useAdministrador()

  const location = useLocation()

  const administrador = location.state?.administrador

  useEffect(() => {
    if (administrador) {
      // Tela de alteração: preenche os campos com os dados do administrador
      setId(administrador.id)
      setNome(administrador.nome)
      setEmail(administrador.email)
      setSenha(administrador.senha)
    }else {
      // Tela de cadastro: limpa os campos
      setId("")
      setNome("")
      setEmail("")
      setSenha("")
    }
  }, [administrador])

  return (
    <>
    
    <MenuAdm />
     
      <main id="conteudoPrincipal">

        <h1>
            {administrador ? "Tela de Alteração de Administrador" : "Tela de Cadastro de Administrador"}
        </h1>

        <div id="divMensagem" role="alert">
          {mensagem}
        </div>

        <form
          id="formCadastroAdm"
          onSubmit={(evento) => {
              administrador
                ? alterarAdministrador(evento, administrador.id)
                : cadastrarAdministrador(evento)
            }
          }
        >

          <div>

            <input
              type="hidden"
              id="txtID"
              value={id}
              onChange={(evento) => setId(evento.target.value)}
            />
          </div>

          <div>
            <label htmlFor="txtNome">
              Nome:
            </label>

            <input
              type="text"
              id="txtNome"
              required
              value={nome}
              onChange={(evento) => setNome(evento.target.value)}
            />
          </div>

          <div>
            <label htmlFor="txtEmail">
              E-mail:
            </label>

            <input
              type="email"
              id="txtEmail"
              required
              value={email}
              onChange={(evento) => setEmail(evento.target.value)}
            />
          </div>

          <div>
            <label htmlFor="txtSenha">
              Senha:
            </label>

            <input
              type="password"
              id="txtSenha"
              required
              value={senha}
              onChange={(evento) => setSenha(evento.target.value)}
            />
          </div>

          <div>
            <button type="submit">
              {administrador ? "Alterar" : "Cadastrar"}
            </button>
          </div>

        </form>


      </main>
    </>
  )
}

export default TelaCadastroAdm
