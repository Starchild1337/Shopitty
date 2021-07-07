import { makeStyles } from "@material-ui/core/styles";

export const UseStyles = makeStyles(() => ({
  media: {
    height: 260,
  },
  cardContent: {
    display: "flex",
    justifyContent: "space-between",
  },
  cartActions: {
    justifyContent: "space-between",
  },
  buttons: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  quantityButtons: {
    display: "flex",
    alignItems: "center",
  },
}));
