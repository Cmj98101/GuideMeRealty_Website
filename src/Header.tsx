import { useState } from "react";
import CustomLogo from "./CustomLogo";

function Header() {
  const [hiddenNav, hideNav] = useState(true);

  return (
    <header className="flex flex-row w-full h-[100px] bg-black px-8">
      <nav className="flex justify-between items-center w-full xl:w-[1440px]">
        <a href="#">
          <CustomLogo width="60" color="white"></CustomLogo>
        </a>
        <button className="text-white" onClick={() => hideNav(false)}>
          Mobile Nav
        </button>
        <ul className="flex flex-row items-center w-1/2 justify-between text-white max-lg:hidden">
          <li className="">
            <a href="#">About</a>
          </li>
          <li className="">
            <a href="#">Sell</a>
          </li>
          <li className="">
            <a href="#">Buy</a>
          </li>
          <li className="">
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
      <nav
        className={
          hiddenNav === false
            ? "fixed right-0 top-0 h-full w-1/2 bg-black z-[20] flex-col items-end px-8 py-8 "
            : "fixed right-0 top-0 h-full w-1/2 bg-black z-[20] hidden flex-col items-end px-8 py-8 "
        }
      >
        <button className="text-white" onClick={() => hideNav(true)}>
          X
        </button>
        <div className="w-full">
          <h3 className="text-white hover:text-yellow-500">
            <a href="About">About</a>
          </h3>
          <h3 className="text-white hover:text-yellow-500">
            <a href="Sell">Sell</a>
          </h3>
          <h3 className="text-white hover:text-yellow-500">
            <a href="Buy">Buy</a>
          </h3>
          <h3 className="text-white hover:text-yellow-500">
            <a href="Past Sales">Past Sales</a>
          </h3>
          <h3 className="text-white hover:text-yellow-500">
            <a href="Contact">Contact</a>
          </h3>
        </div>
      </nav>
    </header>
  );
}

export default Header;
