import React, { useState, useEffect } from "react";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
// import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
// import CheckBoxIcon from '@material-ui/icons/CheckBox';
import Rating from "@material-ui/lab/Rating";

const Checkboxes = ({ handleChange, checkLists }) => {
  console.log(checkLists);
  return checkLists.map(item => (
    <FormControlLabel
      control={
        <Checkbox
          checked={item.checked}
          onChange={handleChange(checkLists.indexOf(item))}
          value={item.checked}
          color="primary"
        />
      }
      key={item.name}
      label={item.name}
    />
  ));
};
const ReviewForm = () => {
  const [state, setState] = useState([
    { name: "Toilet Paper", checked: false },
    { name: "Baby Friendly", checked: false },
    { name: "Soap", checked: false },
    { name: "Dryer", checked: false },
    { name: "Paper Towels", checked: false }
  ]);
  const [value, setValue] = React.useState();
  useEffect(() => {
    // console.log(state);
  });
  const handleChange = index => event => {
    setState({
      ...state,
      [index]: { ...state[index], checked: event.target.checked }
    });
  };
  return (
    <form>
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
      <Checkboxes handleChange={handleChange} checkLists={state} />
    </form>
  );
};

export default ReviewForm;
