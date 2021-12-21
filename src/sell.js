import { useState } from "react";

const Sell = ({ price, onAmountChange }) => {
  const [amount, setAmount] = useState(0);
  const [finalPrice, setFinalPrice] = useState(0);

  const onChange = (e) => {
    const value = e.target.value;
    setAmount(value);
  };

  const onClick = () => {
    setFinalPrice(price * amount);
    onAmountChange(amount);
  };

  if (!price) {
    return null;
  }

  return (
    <div>
      <input className="howManyToBuy" onChange={onChange} />
      <button onClick={onClick}>Buy</button>

      {/* <span>we ran out of oranges</span> */}
      {finalPrice !== 0 && (
        <p>
          you bought {amount} and it cost you {finalPrice}
        </p>
      )}
    </div>
  );
};

export default Sell;
