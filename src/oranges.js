import { useState } from "react";
import Container from "./containers";
import Form from "./form";
import Sell from "./sell";
import "./orange.css";
import { moveOranges, removeOranges } from "./utils";

const Oranges = () => {
  const [formValues, setFormValues] = useState({});

  const onSubmitForm = (values) => {
    setFormValues(values);
  };

  const sellLogic = async (amount) => {
    const newArr = removeOranges(formValues.containers, +amount);
    setFormValues({
      price: formValues.price,
      containers: newArr,
    });

    setTimeout(async () => {
      const movedOranges = moveOranges(newArr);

      for (const mo of movedOranges) {
        const moResolved = await mo();
        setFormValues({
          price: formValues.price,
          containers: moResolved,
        });
      }
    }, 1000);
  };

  return (
    <div className="oranges">
      <Form onSubmit={onSubmitForm} />
      <br />
      <div className="store">
        <Container {...formValues} />
        <Sell price={formValues.price} onAmountChange={sellLogic} />
      </div>
    </div>
  );
};

export default Oranges;
