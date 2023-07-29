import Link from "next/link";
import React from "react";
import CustomButton from "../hooks/Button";
import { RxAvatar } from "react-icons/rx";
import auth from "@/firebase/firebase.auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";

function Navbar() {
  const [user, loading, error] = useAuthState(auth);
  // console.log("user", user);
  const logout = () => {
    signOut(auth);
  };
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
        <Link href="/about">About</Link>
      </li>
    </>
  );

  return (
    <div>
      <div>
        <div className="navbar bg-slate-900 text-white ">
          <div className="dropdown ">
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
          <div className="flex-1 text-2xl  font-bold">
            <Link href="/">
              MASTER<span className="text-success">TECH</span>
            </Link>
          </div>

          <div className="flex-none gap-2">
            <div className="form-control">
              <input
                type="text"
                placeholder="Search"
                className="input input-bordered w-24 md:w-auto"
              />
            </div>
            <div className="text-center flex gap-4 mx-5">
              <div className="text-5xl text-success ">
                {" "}
                <RxAvatar />
              </div>
              <div>
                <h1 className="text-xl font-bold">Account</h1>
                <h3 className="flex">
                  <Link href="/signup" className="hover:text-success">
                    Register{" "}
                  </Link>
                  <p> / </p>
                  <Link href="/login" className="hover:text-success">
                    {" "}
                    Login
                  </Link>
                </h3>
              </div>
            </div>
            <div className="navbar-end">
              <CustomButton>
                <Link href="/login">PC Builder</Link>
              </CustomButton>
            </div>
            {user?.email && (
              <>
                <div className="dropdown text-black dropdown-end">
                  <label
                    tabIndex={0}
                    className="btn btn-ghost btn-circle avatar"
                  >
                    <div className="w-10 rounded-full">
                      <img src="https://i.ibb.co/hKM32TN/01.jpg" />
                    </div>
                  </label>
                  <ul
                    tabIndex={0}
                    className="mt-3  z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
                  >
                    <li>
                      <a className="justify-between">
                        Profile
                        {/* <span className="badge">New</span> */}
                      </a>
                    </li>
                    <li>
                      <a>Settings</a>
                    </li>
                    <li>
                      <a onClick={logout}>Logout</a>
                    </li>
                  </ul>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      {/* Part 2 */}
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
    </div>
  );
}

export default Navbar;
