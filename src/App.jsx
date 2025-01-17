import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainLayout from './MainLayout/MainLayout'
import About from './About/About'
import Contact from './Contact/Contact'
import Portfolio from './Portfolio/Portfolio'

function App() {
  const routes = createBrowserRouter(
    [
      {
        path: "/",
        element: <MainLayout />,
        children: [
          {
            index: true, element: <About/>
          },
          {
            path: 'Contact', element: <Contact/>
          },
          {
            path: 'Portfolio', element: <Portfolio/>
          }
        ]
      }
    ]
  );


  return (
    <RouterProvider router={routes}>
    </RouterProvider>
  )
}

export default App
