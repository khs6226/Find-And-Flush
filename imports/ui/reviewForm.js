import React, { useState } from "react";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
// import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
// import CheckBoxIcon from '@material-ui/icons/CheckBox';
import Rating from "@material-ui/lab/Rating";

const checkLists = [
  "toiletPaper",
  "babyFriendly",
  "soap",
  "dryer",
  "paperTowels"
];
const Checkboxes = () => {
  checkLists.map(title => (
    <FormControlLabel
      control={
        <Checkbox
          // checked={toiletPaper.checked}
          onChange={handleChange("toiletPaper")}
          value="toiletPaper"
          color="primary"
        />
      }
      label={title}
    />
  ));
};
const ReviewForm = () => {
  const [state, setState] = useState({
    toiletPaper: { checked: false },
    babyFriendly: false
  });
  const [value, setValue] = React.useState(0);
  // console.log(state.toiletPaper);
  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };
  const { toiletPaper, babyFriendly } = state;
  return (
    <form>
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
      {Checkboxes}
    </form>
  );
};

export default ReviewForm;
