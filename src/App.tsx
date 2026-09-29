import { Outlet } from "react-router"
import MenuAcessibilidade from "./components/MenuAcessibilidade"
import Rodape from "./components/Rodape"
import "./styles/estilos.css"

function App() {
  return (
    <>
      <MenuAcessibilidade />
      <Outlet />
      <Rodape />
    </>
  )
}

export default App