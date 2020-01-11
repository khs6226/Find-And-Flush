import React, { useState, useEffect, useContext } from "react";
import FormGroup from "@material-ui/core/FormGroup";
import Grid from "@material-ui/core/Grid";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
// import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
// import CheckBoxIcon from '@material-ui/icons/CheckBox';
import Rating from "@material-ui/lab/Rating";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import WashroomContext from "../../api/WashroomContext";
import { Washrooms } from "../../api/washrooms";

const Checkboxes = ({ handleChange, checkLists }) => {
  // console.log(washroomId);
  return checkLists.map(item => (
    <Grid item xs={4} key={item.name}>
      <FormControlLabel
        control={
          <Checkbox
            checked={item.checked}
            onChange={handleChange(checkLists.indexOf(item))}
            value={item.checked}
            color="primary"
          />
        }
        label={item.name}
      />
    </Grid>
  ));
};
const ReviewForm = ({ handleClose, filter, review }) => {
  const washroomContext = useContext(WashroomContext);
  const washroomId = washroomContext.Selected
    ? washroomContext.Selected._id._str
    : null;

  const [state, setState] = useState([
    { name: "Toilet Paper", checked: false },
    { name: "Baby Friendly", checked: false },
    { name: "Soap", checked: false },
    { name: "Dryer", checked: false },
    { name: "Paper Towels", checked: false }
  ]);
  const [value, setValue] = useState(0);
  const [comment, setComment] = useState("");
  useEffect(() => {
    // console.log(washroomId);
  });
  const handleChange = index => event => {
    const newState = [...state].map(item => {
      if (item.name === state[index].name) {
        return Object.assign(item, { checked: event.target.checked });
      }
      return item;
    });
    setState(newState);
  };
  const handleComment = event => {
    setComment(event.target.value);
    // console.log(comment);
  };
  const updateReview = () => {
    Washrooms.update(
      { _id: washroomId },
      {
        $set: {
          comments: [
            {
              userId: 1,
              userComments: comment
            }
          ]
        }
      }
    );
    // console.log("update");
  };
  return (
    <Paper>
      <Button onClick={handleClose}>close</Button>
      <form style={{ padding: "10px 20px" }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Rating
              name="simple-controlled"
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
            />
          </Grid>
          <Checkboxes handleChange={handleChange} checkLists={state} />
          <Grid item xs={8}>
            <TextField
              id="comment"
              label="comment"
              multiline
              rows="4"
              defaultValue=""
              variant="outlined"
              style={{ width: "100%" }}
              onChange={() => handleComment(event)}
            />
          </Grid>
          <Grid item xs={4}>
            {review ? (
              <Button
                variant="contained"
                color="primary"
                onClick={() => updateReview()}
              >
                submit
              </Button>
            ) : (
              <Button variant="contained" color="primary" onClick={filter}>
                filter
              </Button>
            )}
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
};

export default ReviewForm;
