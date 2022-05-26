import { Routes, Route } from "react-router-dom";
import LogIn from "./front-end/login/LogIn";
import NavBar from "./front-end/user/components/navbar/NavBar";
import Home from "./front-end/user/pages/home/Home";
import Register from "./front-end/user/pages/register/Register";

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<LogIn />} />
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
};

export default App;
