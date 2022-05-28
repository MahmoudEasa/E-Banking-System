import { Routes, Route } from "react-router-dom";

import Dashboard from "../../components/dashboard/Dashboard";
import NavBar from "../../components/navbar/NavBar";
import Recharging from "../../components/recharging/Recharging";
import Transactions from "../../components/transactions/Transactions";
import Transfer from "../../components/transfer/Transfer";
import Withdraw from "../../components/withdraw/Withdraw";
import CreateAccount from "./../../components/createAccount/CreateAccount";
import "./home.css";

const UserHome = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/home" element={<Dashboard />} />
        <Route path="/create" element={<CreateAccount />} />
        <Route path="/withdraw" element={<Withdraw />} />
        <Route path="recharging" element={<Recharging />} />
        <Route path="transfer" element={<Transfer />} />
        <Route path="transactions" element={<Transactions />} />
      </Routes>
    </>
  );
};

export default UserHome;
