import React from "react";

const Form = props => {
  const formSubmit = e => {
    e.preventDefault();
    const term = e.target.elements.photos.value;
    props.fetchImages(term);
  };

  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <div>
      <form onSubmit={formSubmit}>
        <input
          className="w-full h-10 border-2 border-gray-900 p-6 focus:border-gray-900"
          type="text"
          placeholder="search for photos"
          name="photos"
        />
      </form>
    </div>
  );
};

export default Form;
