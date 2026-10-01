import { createBrowserRouter } from "react-router"

import App from "./App"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Adm from "./pages/Adm"
import TelaCadastroAdm from "./pages/TelaCadastroAdm"

const rotas = createBrowserRouter([
  {
    path: "/",
    Component: App,

    children: [
      {
        index: true,
        Component: Home,
      },

      {
        path: "login",
        Component: Login,
      },

      {
        path: "adm",
        Component: Adm,
      },

      {
        path: "telaCadastroAdm",
        Component: TelaCadastroAdm,
      },

    ],
  },
])

export default rotas