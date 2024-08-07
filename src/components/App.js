import logo from '../logo.svg';
import '../App.css';
import Details from './Details';
import Add from './Add';
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
    <div className="App">
      <Details transaction ={transactions}/>
      <Add adds={transactions} setUsers={setUsers}/>
    </div>
  );
}

export default App;
