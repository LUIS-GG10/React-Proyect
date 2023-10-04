import Main from '/Users/luis_/my-react-app/src/components/main.jsx'
import Astros from '/Users/luis_/my-react-app/src/components/Astros'
import { Route, Routes} from "react-router-dom";
import Navbar from '/Users/luis_/my-react-app/src/components/Navbar.jsx'
import About from '/Users/luis_/my-react-app/src/components/About.jsx'
import './App.css'

function App() {
  const linksdata = [
    { name: 'home', href: '/' },
    { name: 'about', href: '/about' },  // Corregido el nombre 'abot' a 'about'
    { name: 'astros', href: '/astros' },
  ];

  return (
    <>
      <Navbar Links={linksdata} />  {/* Corregido de 'links' a 'Links' */}
      <Routes>
        <Route path='/about' element={<About />} />
        <Route path='/' element={<Main />} />
        <Route path='/Astros' element={<Astros/>} />
      </Routes>
    </>
  )
}

export default App;
