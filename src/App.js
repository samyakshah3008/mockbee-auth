import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LandingPage } from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import Mockman from "mockman-js";
import Signup from "./pages/SignupPage";
import PrivateRoute from "./components/PrivateRoute";
import { UserInfoPage } from "./pages/UserInfoPage";
import AboutPage from "./pages/AboutPage";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/mockman" element={<Mockman />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/about" element={<AboutPage />}></Route>
        <Route
          path="/user-info"
          element={
            <PrivateRoute>
              <UserInfoPage />
            </PrivateRoute>
          }
        />
        
      </Routes>
    </div>
  );
}

export default App;
