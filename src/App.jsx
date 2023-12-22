import React from "react";
import "./App.css";
import svg from "./assets/bckc.png";
import logo from "./assets/logo.png";
function App() {
  return (
    <>
      <nav>
        <img className="logo" src={logo} alt="" />
        <div className="search px-8">
          <input 
            type="text"
            name=""
            id=""
            placeholder="Search items you lost "
          />
        </div>

        <div className="navbtn">
          <button className="signup">SIGNUP</button>
          <button className="login">LOGIN</button>
        </div>
      </nav>
      <div className="page1">
        <div className="main">
          <div className="btn">
            <button className="btn1">Yeh! You Found Something</button>
            <button className="btn2">Oh! You Lost Something</button>
          </div>
          <img src={svg} alt="" />
        </div>
        <h1 className="tagline">LOST IT | LIST IT | FIND IT</h1>
      </div>
      {/* <div className=" border border-black grid grid-cols-5 gap-4 p-4">
        <div className="">
          <div className="h-fit border hidden md:block sticky top-8 border-red-400">
            Card Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil odit error amet, enim perspiciatis autem ex eveniet, hic quod, accusamus similique non eius repellendus cum voluptas ullam? Excepturi, sunt perspiciatis ullam amet incidunt laborum ab ea tenetur! Quaerat, autem pariatur?
          </div>
        </div>
        <div className="border border-red-400 col-span-5 md:col-span-4">Card lorem900</div> */}
      {/* </div> */}
    </>
  );
}

export default App;
