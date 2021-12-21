import { useState } from "react";
import "./form.css";

const Form = ({ onSubmit }) => {
  const [formValues, setFormValues] = useState({});

  const onChange = (e) => {
    const target = e.target;

    setFormValues({
      ...formValues,
      [target.name]: target.value,
    });
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    const obj = {
      containers: [],
      price: formValues.price,
    };

    for (let index = 0; index < +formValues.containers; index++) {
      const arr = Array(+formValues.amountPerContainer).fill(0);
      obj.containers.push(arr);
    }

    onSubmit(obj);
  };

  return (
    <form className="form" onSubmit={onSubmitForm}>
      <div>
        <label>containers</label>
        <input type="number" name="containers" onChange={onChange} />
      </div>
      <div>
        <label>amount per container</label>
        <input type="number" name="amountPerContainer" onChange={onChange} />
      </div>
      <div>
        <label>price</label>
        <input type="number" name="price" onChange={onChange} />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
