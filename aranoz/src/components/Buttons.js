import React from 'react'

 function Buttons(props) {
  return (
    <>
    <button className={`btn btn-${props.className}` }>{ props.text ? props.text: "i'm a button"}</button>
    </>
  )
}

export default Buttons
