import React, {useState} from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
// import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
// import CheckBoxIcon from '@material-ui/icons/CheckBox';

const ReviewForm = () => {
  const [state, setState] = useState({
    checkedA : false
  });
  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };


    return (
        <form>
            <FormControlLabel
        control={
          <Checkbox
            checked={state.checkedA}
            onChange={handleChange('checkedA')}
            value="checkedA"
            color="primary"s
          />
        }
        label="Primary"
      />
        </form>
    );
};

export default ReviewForm;