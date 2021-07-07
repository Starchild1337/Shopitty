import React from "react";
import {
  Typography,
  Button,
  Card,
  CardContent,
  CardActions,
  CardMedia,
} from "@material-ui/core";
import { UseStyles } from "./styles";

const CartItem = ({ item, handleUpdateItemQty, handleRemoveItem }) => {
  const classes = UseStyles();
  return (
    <Card>
      <CardMedia
        image={item.media.source}
        alt={item.name}
        className={classes.media}
      />
      <CardContent className={classes.cardContent}>
        <Typography variant="h4">{item.name}</Typography>
        <Typography variant="h5">
          {item.line_total.formatted_with_symbol}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <div className={classes.buttons}>
          <div className={classes.quantityButtons}>
            <Button
              type="button"
              size="small"
              onClick={() => handleUpdateItemQty(item.id, item.quantity - 1)}
            >
              -
            </Button>
            <Typography>{item.quantity}</Typography>
            <Button
              type="button"
              size="small"
              onClick={() => handleUpdateItemQty(item.id, item.quantity + 1)}
            >
              +
            </Button>
          </div>
          <div className={classes.buttonRemove}>
            <Button
              variant="contained"
              type="button"
              color="secondary"
              onClick={() => handleRemoveItem(item.id)}
            >
              Remove
            </Button>
          </div>
        </div>
      </CardActions>
    </Card>
  );
};

export default CartItem;
