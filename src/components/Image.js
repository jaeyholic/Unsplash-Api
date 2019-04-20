import React from "react"

const Image = props => {
  return (
    <div className="pt-10">
      <h3 className="pb-6">{props.image.user.first_name}</h3>
      <img className="pb-6" src={props.image.urls.full} alt="" />
      <p>{props.image.description}</p>
    </div>
  )
}

export default Image
