import React from "react";
import { IoMdCart } from "react-icons/io";
import Home from "./Home";

function Header() {
  return (
    <>
      <div className="bg-danger" style={{ height: "70px" }}>
        <IoMdCart size="60px" style={{ marginLeft: "100em" }} />
      </div>
    <div className="mt-4">
    <Home />
    </div>
    </>
  );
}

export default Header;
