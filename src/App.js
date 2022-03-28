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
import EditProfileScreen from "./components/tuiter/EditProfileScreen";

function App() {
  return (
      <BrowserRouter>
        <div className="container">
            <Routes>
                <Route path="/" element={<Labs/>}/>
                <Route path="/hello" element={<HelloWord />}/>
                <Route path="/tuiter" element={<Tuiter />}>
                    <Route index element={<HomeScreen />}/>
                    <Route path="explore" element={<ExploreScreen/>}/>
                    <Route path="profile" element={<ProfileScreen />}/>
                    <Route path="editprofile" element={<EditProfileScreen />}/>
                </Route>
            </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;
