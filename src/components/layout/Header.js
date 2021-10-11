import React from "react";
import style from "./Header.module.css";
import mealsImage from "../../assets/meals.jpeg";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={style.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={style['main-image']}>
        <img src={mealsImage} alt="A table full of delicios food!" />
      </div>
    </React.Fragment>
  );
};
export default Header;
