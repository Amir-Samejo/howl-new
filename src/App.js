
import { useEffect, useState } from 'react';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Home from './Pages/Home';
import Layout from './components/Layout';
import About from './Pages/About';
import Contact from './Pages/Contact'
import Portfolio from './Pages/PortFolio';
import Pricing from './Pages/Pricing';
import Services from './Pages/Services';
import SingleService from './Pages/SingleService'
import SingleTeam from './Pages/SingleTeam'
import Team from './Pages/Team';


const router = createBrowserRouter(
  createRoutesFromElements(

    <Route path='/' element={<Layout />}>
      <Route index element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/portfolio' element={<Portfolio />} />
      <Route path='/pricing' element={<Pricing />} />
      <Route path='/services' element={<Services />} />
      <Route path='/service' element={<SingleService />} />
      <Route path='/singleteam' element={<SingleTeam />} />
      <Route path='/team' element={<Team />} />
    </Route>
  )
);



function App() {
  const [cursorX, setCursorX] = useState()
  const [cursorY, setCursorY] = useState()

  useEffect(() => {
    window.addEventListener('mousemove', (e) => {
      setCursorX(e.pageX)
      setCursorY(e.pageY)

    })

  })

  return (



    <div className="App">


      <RouterProvider router={router} />

      <div className="cursor" style={{ left: cursorX + "px", top: cursorY + "px" }}>
      </div>

    </div>
  );
}

export default App;
