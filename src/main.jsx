import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// 1 Configurando router
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Body from './components/body/Body.jsx'
import CriarConta from './components/conta/CriarConta.jsx'
import Login from './components/login/Login.jsx'
import Score from './components/score/Score.jsx'
import Sobre from './components/sobre/Sobre.jsx'

/*const router = createBrowserRouter([
  {
    path: "/",
    element: <Body/>,
  },
  {
    path: "/conta",
    element: <CriarConta/>,
  },
])*/

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/inicio",
        element: <Body/>,
      },
      {
        path: "/conta",
        element: <CriarConta/>,
      },
      {
        path: "/login",
        element: <Login/>,
      },
      {
        path: "/score pessoal",
        element: <Score/>,
      },
      {
        path: "/sobre",
        element: <Sobre/>,
      }
    ]
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)

//<RouterProvider router={router}/>