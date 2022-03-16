import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import HelloWord from "./components/hello-world";
import Labs from "./components/labs";
import Tuiter from "./components/tuiter";
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
        <div className="container">
            <Routes>
                <Route path="/hello" element={<HelloWord />}/>
                <Route path="/" element={<Labs/>}/>
                <Route path="/tuiter" element={<Tuiter/>}/>
            </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;
