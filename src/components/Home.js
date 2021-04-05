import React, { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { SignOut } from "./Auth";
import Design from "../images/FE-TASK.png";
import CloseIcon from "@material-ui/icons/Close";

function Home() {
  const { currentUser } = useContext(AuthContext);
  const [showImage, setshowImage] = useState(false);
  return (
    <>
      <div className="home">
        <div className="display-name">
          <h3>{currentUser.displayName}</h3>
          <SignOut />
        </div>
        <div className="image-wrapper">
          <p>Replication of screen design</p>
          <img onClick={() => setshowImage(true)} src={Design} />
        </div>
      </div>
      {/* {showImage && (
        <div className="design">
          <CloseIcon onClick={() => setshowImage(false)} />
          <img src={Design} />
        </div>
      )} */}
    </>
  );
}

export default Home;
