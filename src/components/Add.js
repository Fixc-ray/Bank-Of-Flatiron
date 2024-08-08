import React, { useState } from "react";

function Add({ adds, setUsers }) {
  const [added, setAddedData] = useState({
    date: "",
    description: "",
    category: "",
    amount: "",
  });
  const handleOnChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setAddedData({
      ...added,
      [name]: value,
    });
  };
  const submit = (e) => {
    e.preventDefault();
    fetch("https://json-server-vercel-blush.vercel.app/transactions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify(added),
    })
      .then((res) => res.json)
      .then((add) => setUsers([add, ...adds]));

    setAddedData({
      date: "",
      description: "",
      category: "",
      amount: "",
    });
    return(
      alert("New Transaction Added")
    )
  };
  return (
    <div>
      <div>
        <h1>New Transaction</h1>
      </div>
      <form onSubmit={submit} >
        <div>
          <input
            type="date"
            name="date"
            value={added.date}
            placeholder="Date"
            onChange={handleOnChange}
            required
          ></input>
        </div>
        <div>
          <input
            type="text"
            name="description"
            value={added.description}
            placeholder="Description"
            onChange={handleOnChange}
            required
          ></input>
        </div>
        <div>
          <input
            type="text"
            name="category"
            value={added.category}
            placeholder="category"
            onChange={handleOnChange}
            required
          ></input>
        </div>
        <div>
          <input
            type="number"
            name="amount"
            value={added.amount}
            placeholder="Amount"
            onChange={handleOnChange}
            required
          ></input>
        </div>
        <div>
          <input type="submit"></input>
        </div>
      </form>
    </div>
  );
}

export default Add;
