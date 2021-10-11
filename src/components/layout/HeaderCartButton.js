import { useContext, useEffect, useState } from "react";
import style from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {
  const [btnIsHighltghted, setBtnIsHightlighted] = useState();

  const cartCtx = useContext(CartContext);
  const {items} = cartCtx;

  const numberOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  
  const btnClasses = `${style.button} ${btnIsHighltghted ? style.bump : ""}`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnIsHightlighted(true);
    const timer = setTimeout(() => {
      setBtnIsHightlighted(false);
    },100);

    return () => {
      clearTimeout(timer);
    }
  }, [items]);

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={style.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={style.badge}>{numberOfCartItems}</span>
    </button>
  );
};
export default HeaderCartButton;
