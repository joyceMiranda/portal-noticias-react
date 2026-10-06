import MenuAdm from "../components/MenuAdm"
import useAdministrador from "../hooks/useAdministrador"

function TelaCadastroAdm() {

   const {
    nome,
    setNome,
    email,
    setEmail,
    senha,
    setSenha,
    mensagem,
    cadastrarAdministrador
  } = useAdministrador()

  return (
    <>
    
    <MenuAdm />
     
      <main id="conteudoPrincipal">

        <h1>
            Tela de Cadastro de Administradores
        </h1>

        <div id="divMensagem" role="alert">
          {mensagem}
        </div>

        <form id="formCadastroAdm" onSubmit={cadastrarAdministrador}>

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
              Cadastrar
            </button>
          </div>

        </form>


      </main>
    </>
  )
}

export default TelaCadastroAdm
