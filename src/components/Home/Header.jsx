import React from "react";

function Header() {
  return (
    <div className="header p-0 d-flex">
      <img
        src={require(`../../assets/images/task-icon.png`)}
        alt="icon"
        className="ms-3 mt-2 icon"
      />
      <h1 className="mt-2 text-light">OrganizeMe</h1>
    </div>
  );
}

export  {Header};
