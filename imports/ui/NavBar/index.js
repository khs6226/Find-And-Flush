import React from "react";
import useStyles from "./styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import WcIcon from "@material-ui/icons/Wc";
import { Template } from "meteor/templating";
import { Blaze } from "meteor/blaze";
import { ButtonBase } from "@material-ui/core";
import AccountsUIWrapper from "../AccountsUIWrapper";

function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <SearchIcon />
            <WcIcon />
          </Typography>
          <Typography variant="h6" className={classes.title}>
            Find and Flush
          </Typography>
          <Button color="inherit">
            <AccountsUIWrapper />
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
export default ButtonAppBar;
