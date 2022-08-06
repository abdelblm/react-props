import React from "react";

function Profil(props) {
  return (
    <div className="flex  justify-around">
      <div className="">
        <h1 className="">{props.fullName}</h1>
      </div>
      <div>
        <button
          className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          onClick={() => props.alertMyInput(`My name is James Brown `)}
        >
          ClickMe
        </button>
      </div>
      <div>
        <h1 className="">{props.bio}</h1>
      </div>
      <div>
      <h1 className="">{props.profession}</h1>
      </div>

     
      <div>
        <img alt="" />
        {props.children}
      </div>
    </div>
  );
}

export default Profil;
