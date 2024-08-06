import React from 'react'

function Detail({detail}) {
  return (
    <div>
        <h3>Date: {detail.date}</h3>
        <h3>Description: {detail.description}</h3>
    </div>
  )
}

export default Detail