import Card from "../UI/Card";
import classes from "./Cart.module.css";

const Cart = (props) => {
  const cartitems = (
    <ul className={classes["cart-items"]}>
      {[
        {
          id: "c1",
          name: "Sushi",
          amount: 2,
          price: 12.99,
        },
      ].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );
  return (
    <Card >
      {cartitems}
      <div className={classes.total}>
        <span>TotalAmount</span>
        <span>35.62</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Card>
  );
};

export default Cart;
