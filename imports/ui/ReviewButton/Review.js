import React from "react";
import ReviewForm from "../ReviewForm";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Fab from "@material-ui/core/Fab";
import EditIcon from "@material-ui/icons/Edit";

const modalStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
};

const Review = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
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
    </>
  );
};

export default Review;
