import Input from "../../Components/Input";
import "./Price.css";

const Price = ({ handleChange }) => {
  return (
    <>
      <div className="ml">
        <h2 className="sidebar-title price-title">Price</h2>
        <label className="sidebar-label-container">
          <input type="radio" onChange={handleChange} value="" name="test2" />
          <span className="checkmark"></span>All
        </label>
          <Input />
          <Input />
          <Input />
          <Input />
          <Input />
      </div>
    </>
  );
};

export default Price;
