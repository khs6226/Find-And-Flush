import React from "react";
import ReviewForm from "./ReviewForm";
import NavBar from "./NavBar";
import ListView from "./ListView";
import DetailView from "./DetailView";
import AccountsUIWrapper from "./AccountsUIWrapper.js";
import Reviews from "./Reviews";
import Maps from "./Maps";
import WashroomProvider from "../api/WashroomProvider";

import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Button from "@material-ui/core/Button";
import Fab from "@material-ui/core/Fab";
import EditIcon from "@material-ui/icons/Edit";

const modalStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
};

const App = () => {
  return (
    <WashroomProvider>
      <NavBar />
      <Maps />
      <ListView />
      <DetailView />
      {/* <Reviews /> */}
    </WashroomProvider>
  );
};

export default App;
