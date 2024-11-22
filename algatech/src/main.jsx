import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import Erro from './routes/Error.jsx'
import Home from './routes/Home.jsx'
import Cadastrar from './routes/Cadastrar.jsx'
import Login from './routes/Login.jsx'
import Sobre from './routes/Sobre.jsx'
import Solucao from './routes/Solução.jsx'

const router = createBrowserRouter([
  {
    //Elementos Pai
    path: '/', element:<App/>,
    errorElement: <Erro/>,

    //Elementos Filho
    children:[
      {path: '/', element:<Home/>},
      {path: '/cadastrar', element:<Cadastrar/>},
      {path: '/login', element:<Login/>},
      {path: '/sobre', element:<Sobre/>},
      {path: '/solucao', element:<Solucao/>},
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
