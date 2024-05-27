import React from 'react'

const Service = ({ image, text }) => {
  return (
    <div>
        <div>
            <img src={image} alt="" />
        </div>

        <h3>{text}</h3>
    </div>
  )
}

export default Service