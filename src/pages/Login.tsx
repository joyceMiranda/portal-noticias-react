import { Link } from "react-router"
import useLogin from "../hooks/useLogin"

function Login() {

    const {
        email,
        setEmail,
        senha,
        setSenha,
        mensagem,
        realizarLogin
    } = useLogin()

  return (
    <>

        <h1 className="destaque">
            Formulário de Login
        </h1>

        <main id="conteudoPrincipal">

            <div id="divMensagem" role="alert">
                {mensagem}
            </div>
        
            <form id="formLogin" onSubmit={realizarLogin}>
                <div>
                    <label htmlFor="txtEmail">
                        E-mail: &nbsp;
                    </label>
                    <input type="email" id="txtEmail" required  
                        value={email}
                        onChange={(evento) =>{
                            setEmail(evento.target.value)}
                    }
                    /> 
                </div>
                <div>
                    <label htmlFor="txtSenha">
                        Senha: &nbsp;
                    </label>
                    <input type="password" id="txtSenha" required
                        value={senha}
                        onChange={(evento) =>{
                            setSenha(evento.target.value)}
                        }
                    />
                </div>
                <div>
                     <button type="submit">
                        Enviar
                    </button>     
                </div>
                <div>
                     
                </div>
                
            </form> 

            <br />

            <p>
                <Link to="/">
                Voltar
            </Link>
            </p>

        </main>

    </>
  )
}

export default Login
