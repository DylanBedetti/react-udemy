// import React from "react"; // not required because no JSX

const Route = ({ path, children }) => {
  return window.location.pathname === path ? children : null;
};

export default Route;
