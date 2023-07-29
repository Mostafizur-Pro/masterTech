import Link from "next/link";
import React from "react";

function Sidebar() {
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
              <Link href="/product/processor">CPU/Processor</Link>
            </li>
            <hr />
            <li>
              <Link href="/product/motherboard">Motherboard</Link>
            </li>
            <hr />
            <li>
              <Link href="/product/ram">RAM</Link>
            </li>
            <hr />
            <li>
              <Link href="/product/power-supply">Power Supply Unit</Link>
            </li>
            <hr />
            <li>
              <Link href="/product/storage">Storage Device</Link>
            </li>
            <hr />
            <li>
              <Link href="/product/monitor">Monitor</Link>
            </li>
            <hr />
            <li>
              <Link href="/product/others">Others</Link>
            </li>
          </ul>
        </details>
      </li>
      <li>
        <Link href="/about">About</Link>
      </li>
    </>
  );
  return (
    <div className="navbar hidden lg:flex bg-base-100">
      <div className="navbar-start"></div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal text-2xl px-1">{menuItems}</ul>
      </div>
      {/* <div className="navbar-end">
      <Link href="/login" className="btn">
        Login
      </Link>
    </div> */}
    </div>
  );
}

export default Sidebar;
