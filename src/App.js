import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import HelloWord from "./components/hello-world";
import Labs from "./components/labs";
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import HomeScreen from "./components/tuiter/HomeScreen/HomeScreen";
import ExploreScreen from "./components/tuiter/ExploreScreen/ExploreScreen";

function App() {
  return (
      <BrowserRouter>
        <div className="container-fluid">
            <Link to="/hello"/>
            <Link to="/"/>
            <Link to="/tuiter"/>
            <Link to="/tuiter/home"/>
            <Link to="/tuiter/explore"/>
            <Routes>
                <Route path="/hello" element={<HelloWord />}/>
                <Route path="/" element={<Labs/>}/>
                <Route path="/tuiter/" element={<HomeScreen />}/>
                <Route path="/tuiter/home" element={<HomeScreen />}/>
                <Route path="/tuiter/explore" element={<ExploreScreen/>}/>
            </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;
