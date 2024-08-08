import React from "react";
import { useParams } from "react-router-dom";

function Detail({ detail }) {
  const { id } = useParams();

  const handleDelete = () => {
    fetch(`https://json-server-vercel-blush.vercel.app/transactions`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      }
    })
      .then((res) => res.json())
      .then(() => console.log("User Deleted"))
      .catch((error) => console.log(error));
  };

  return (
    <div className="detail">
      <table bgcolor="black" width={400}>
        <thead>
          <tr bgcolor="grey">
            <th width="100">Date</th>
            <th width="100">Description</th>
            <th width="100">Category</th>
            <th width="100">Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr bgcolor="azure" align="center">
            <td>{detail.date}</td>
            <td>{detail.description}</td>
            <td>{detail.category}</td>
            <td>{detail.amount}</td>
            <td>
              <button onClick={handleDelete}>delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Detail;
