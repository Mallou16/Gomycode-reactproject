import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div>
      <ul>
        <Link to="/">
          {" "}
          <li>Contries</li>
        </Link>

        <Link to="Login">
          {" "}
          <li style={{ float: "right" }}>Login</li>
        </Link>
      </ul>
    </div>
  );
}
