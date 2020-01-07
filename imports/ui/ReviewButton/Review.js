import React from "react";
import ReviewForm from "../ReviewForm";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Fab from "@material-ui/core/Fab";
import EditIcon from "@material-ui/icons/Edit";
import TuneIcon from "@material-ui/icons/Tune";

const modalStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
};

const Review = ({ review }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      {review ? (
        <Fab color="primary" aria-label="edit" onClick={handleOpen}>
          <EditIcon />
        </Fab>
      ) : (
        <TuneIcon onClick={handleOpen} />
      )}
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
          <ReviewForm handleClose={handleClose} review={review} />
        </Fade>
      </Modal>
    </>
  );
};

export default Review;
