import React from "react"
import PropTypes from "prop-types"

const Image = ({ image }) => {
  return (
    <div className="pb-10">
      <img src={image.urls.full} alt={image.user.first_name} />
    </div>
  )
}

Image.propTypes = {
  image: PropTypes.object,
}

export default Image
