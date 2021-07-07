import React from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  MenuItem,
  Menu,
  Typography,
} from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import { UseStyles } from "./styles";

const Navbar = ({ totalNumber }) => {
  const classes = UseStyles();
  return (
    <div>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
          <Typography
            component={Link}
            to="/"
            variant="h6"
            className={classes.title}
            color="inherit"
          >
            <img
              src="https://previews.123rf.com/images/pavlematic/pavlematic2005/pavlematic200500022/147404280-fast-shopping-cart-icon-isolated.jpg"
              alt="Commerce.js"
              height="50px"
              className={classes.image}
            />
            Shopitty
          </Typography>
          <div className={classes.grow} />

          <div className={classes.button}>
            <IconButton
              component={Link}
              to="/cart"
              aria-label="Show cart items"
              color="inherit"
            >
              <Badge badgeContent={totalNumber} color="secondary">
                <ShoppingCart />
              </Badge>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
