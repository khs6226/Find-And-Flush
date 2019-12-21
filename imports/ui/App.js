import React from "react";
import ReviewForm from "./ReviewForm";
import NavBar from "./NavBar";
import ListView from "./ListView";
import DetailView from "./DetailView";
import AccountsUIWrapper from "./AccountsUIWrapper.js";
import Reviews from "./Reviews";
import Maps from "./Maps";
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
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <NavBar />
      <Maps />
      <ListView />
      <DetailView />
      <Reviews />
      <Fab color="primary" aria-label="edit" onClick={handleOpen}>
        <EditIcon />
      </Fab>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        style={modalStyle}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <Fade in={open}>
          <ReviewForm handleClose={handleClose} />
        </Fade>
      </Modal>
    </div>
  );
};

export default App;
