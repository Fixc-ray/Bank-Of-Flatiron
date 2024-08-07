import React from 'react'

function Detail({detail}) {
  return (
    <div>
        <h2>Date: {detail.date}</h2>
        <h3>Description: {detail.description}</h3>
        <h3>Category: {detail.category}</h3>
        <h3>Amount: {detail.amount}</h3>
    </div>
  )
}

export default Detail