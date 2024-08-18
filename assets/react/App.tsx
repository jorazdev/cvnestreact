import { BrowserRouter } from "react-router-dom";
import Router from "./router/Router";

function App() {

  return (
    <>
      <BrowserRouter>
        <div className="App">
          {/* <Navigation/> */}
          <Router/>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
