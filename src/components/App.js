import logo from "../logo.svg";
import "../App.css";
import Details from "./Details";
import Add from "./Add";
import React, { useEffect, useState } from "react";

function App() {
  const url = "http://localhost:3000/transactions";
  const [transactions, setUsers] = useState([]);
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((transactions) => {
        setUsers(transactions);
      });
  }, []);
  return (
    <div>
      <div className="app-detail">
        <img src="https://plus.unsplash.com/premium_photo-1668902223815-52beab29f39a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGJhbmslMjBsb2dvfGVufDB8fDB8fHww" />
        <h1>BANK OF FLATIRON</h1>
      </div>
      <div className="App">
        <Add adds={transactions} setUsers={setUsers} />
        <Details transaction={transactions} />
      </div>
    </div>
  );
}

export default App;
