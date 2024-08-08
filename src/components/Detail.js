import React from "react";

function Detail({ detail }) {
  return (
    <div className="detail">
      <table bgcolor="black" width={600}>
        <tr bgcolor="grey">
          <th width="100">Date</th>
          <th width="100">Description</th>
          <th width="100">Category</th>
          <th width="100">Amount</th>
        </tr>
        <tr bgcolor="azure" align="center">
          <td>{detail.date}</td>
          <td>{detail.description}</td>
          <td>{detail.category}</td>
          <td>{detail.amount}</td>
        </tr>
      </table>
    </div>
  );
}

export default Detail;

// <h2>Date: {detail.date}</h2>
// <h3>Description: {detail.description}</h3>
// <h3>Category: {detail.category}</h3>
// <h3>Amount: {detail.amount}</h3>
