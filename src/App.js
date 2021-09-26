import React, { useState } from "react";
import "./App.css";
import Feed from "./Feeds/Feed";
import Hader from "./HaderBox/Hader";
import Login from "./Login";
import SideBarLeft from "./SideBarLeft/SideBarLeft";
import SidebarRight from "./SideBarRight/SidebarRight";

function App({ val }) { 
  const [name, setName] = useState();
  const user = name;
  //console.log(name);

  const getName = (data) => {
      setName(data)
  }

  return (
    <div className="app">
      {!user ? (
        <Login name={getName} />
      ) : (
        <>
       
          <Hader />
          <div className="app-body">
            <SideBarLeft />
            <Feed />
            <SidebarRight />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
