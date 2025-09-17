import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.tsx'
import Clients from './pages/Clients.tsx'
import { ClientsProvider } from './contexts/ClientsContext.tsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {index: true, element: <Home/>},
      {path: 'clients', element: <Clients/>}
    ]
  }
]);
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ClientsProvider>
      <RouterProvider router={router}/>
    </ClientsProvider>
  </StrictMode>,
)
