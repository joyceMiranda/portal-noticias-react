import MenuAdm from "../components/MenuAdm"
import useAdministrador from "../hooks/useAdministrador"

function TelaListaAdm() {

const {
    consultarAdministradores
  } = useAdministrador()

  const administradores = consultarAdministradores()

  return (
    <>

    <MenuAdm />
     
      <main id="conteudoPrincipal">

        <h1>
            Tela de Listagem de Administradores
        </h1>

        <table>

          <thead>
            <tr>
              <th>Nome</th>
              <th>E-mail</th>
              <th>Senha</th>
            </tr>
          </thead>

          <tbody>

            {administradores.map(
              (administrador: any) => (

                <tr key={administrador.email}>

                  <td>
                    {administrador.nome}
                  </td>

                  <td>
                    {administrador.email}
                  </td>

                  <td>
                    {administrador.senha}
                  </td>

                </tr>
              )
            )}

          </tbody>

        </table>

      </main>
    </>
  )
}

export default TelaListaAdm