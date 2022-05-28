import "./dashboard.css";

import { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

const Dashboard = () => {
  const location = useLocation();
  // const [id, setId] = useState(location.state.id);
  const [accountNumber, setAccountNumber] = useState(0);
  const [currentBalance, setCurrentBalance] = useState(0);

  console.log(location);
  useEffect(() => {
    axios.get("http://localhost:5000/users").then((res) => {
      // console.log(res);
    });
  }, []);

  return (
    <main className="user-home">
      <div className="title">
        <h1>Welcome To Onilne Banking Sestem</h1>
      </div>
      <div className="section">
        <p>
          Account Number: <span>tests</span>
        </p>
        <p>
          Current Balance: <span>100.00</span>
        </p>
      </div>
    </main>
  );
};

export default Dashboard;
