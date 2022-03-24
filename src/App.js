import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import HelloWord from "./components/hello-world";
import Labs from "./components/labs";
import Tuiter from "./components/tuiter";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import HomeScreen from "./components/tuiter/HomeScreen/";
import ExploreScreen from "./components/tuiter/ExploreScreen/ExploreScreen";
import ProfileScreen from "./components/tuiter/ProfileScreen";

function App() {
  return (
      <BrowserRouter>
        <div className="container">
            <Routes>
                <Route path="/" element={<Labs/>}/>
                <Route path="/hello" element={<HelloWord />}/>
                <Route path="/tuiter" element={<Tuiter />}>
                    <Route path="home" element={<HomeScreen />}/>
                    <Route path="explore" element={<ExploreScreen/>}/>
                    <Route path="profile" element={<ProfileScreen />}/>
                    {/*<Route path="notifications" element={<NotificationScreen/>}/>*/}
                </Route>
            </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;
