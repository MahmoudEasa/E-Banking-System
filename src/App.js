import { Routes, Route } from "react-router-dom";
import LogIn from "./front-end/login/LogIn";
import UserHome from "./front-end/user/pages/home/UserHome";
import Register from "./front-end/user/pages/register/Register";
import AdminHome from "./front-end/admin/pages/home/AdminHome";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LogIn />} />
        <Route path="/user/home" element={<UserHome />} />
        <Route path="/admin/home" element={<AdminHome />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
};

export default App;
