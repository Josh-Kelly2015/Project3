import React from "react";

const SubmitButton = props => {
  return (
    <button className="btn btn-lg btn-dark text-info m-4 ">
      {props.children}
    </button>
  );
};

export default SubmitButton;
