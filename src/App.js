import Navbar from "./Navbar"
import Blind from "./facts/Blind"
import Bridge from "./facts/Bridge"
import Rosie from "./facts/Rosie"
import Home from "./facts/Home"

function App() {
  let component 
  switch (window.location.pathname) {
    case "/":
      component = <Home />
      break 
      case "/fact1":
      component = <Blind />
      break
      case "/fact2":
      component = <Bridge />
      break
      case "/fact3":
      component = <Rosie />
      break 
  }
  return (
  <> 
  <Navbar /> 
  <div className="container">
  {component} 
  </div>
  </>
  )
}

export default App
