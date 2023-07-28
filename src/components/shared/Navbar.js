import Link from "next/link";
import React from "react";

function Navbar() {
  const menuItems = (
    <>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li tabIndex={0}>
        <details>
          <summary>Component</summary>
          <ul className="w-60 p-2  bg-white  z-40">
            <li>
              <a>CPU/Processor</a>
            </li>
            <hr />
            <li>
              <a>Motherboard</a>
            </li>
            <hr />
            <li>
              <a>RAM</a>
            </li>
            <hr />
            <li>
              <a>Power Supply Unit</a>
            </li>
            <hr />
            <li>
              <a>Storage Device</a>
            </li>
            <hr />
            <li>
              <a>Monitor</a>
            </li>
            <hr />
            <li>
              <a>Others</a>
            </li>
          </ul>
        </details>
      </li>
      <li>
        <a>About</a>
      </li>
    </>
  );

  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {menuItems}
            </ul>
          </div>
          <div className="btn btn-ghost normal-case text-xl">
            <p>
              MASTER<span className="text-success font-bold">TECH</span>
            </p>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{menuItems}</ul>
        </div>
        <div className="navbar-end">
          <Link href="/login" className="btn">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
