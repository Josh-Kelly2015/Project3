import React from "react";

function Header(props) {
  return (
    <>
      <div className="row bg-light">
        <Header className="text-center text-dark">{props}</Header>
      </div>
    </>
  );
}

export default Header;
