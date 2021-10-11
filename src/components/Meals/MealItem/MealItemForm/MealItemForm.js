import React from "react";
import Input from "../../../UI/Input/Input";
import style from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  return (
    <form className={style.form}>
      <Input
        label="Amount"
        input={{
          id: "amount" + props.id,
          type: "number",
          min: "1",
          max: "5",
          defaultValue: "1",
        }}
      />
      <button>Add</button>
    </form>
  );
};
export default MealItemForm;
