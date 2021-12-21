import "./container.css";

const Container = ({ containers, price }) => {
  if (!containers) {
    return null;
  }
  return (
    <div>
      <div className="containers">
        {containers?.map((x, i) => (
          <div key={i}>{x.length}</div>
        ))}
      </div>
      <div>Price per orange $ {price}</div>
    </div>
  );
};

export default Container;
