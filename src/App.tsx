import { Outlet } from "react-router"
import MenuAcessibilidade from "./components/MenuAcessibilidade"
import Rodape from "./components/Rodape"
import "./styles/estilos.css"
import Menu from "./components/Menu"

function App() {
  return (
    <>
      <MenuAcessibilidade />
      <Menu />
      <Outlet />
      <Rodape />
    </>
  )
}

export default App