import { useState } from "react";

function App() {
  const [pepperoniIsChecked, setPepperoniIsChecked] = useState(false);
  const [size, setSize] = useState("small");
  const [orderPlaced, setOrderPlaced] = useState(false);

  function togglePepperoni(e) {
    setPepperoniIsChecked(e.target.checked);
  }

  function handleSizeChange(e) {
    setSize(e.target.value);
  }

  function placeOrder() {
    setOrderPlaced(true);
  }

  return (
    <div>
      <h1>Select Pizza Toppings</h1>
      <input
        type="checkbox"
        id="pepperoni"
        checked={pepperoniIsChecked}
        aria-checked={pepperoniIsChecked}
        onChange={togglePepperoni}
      />
      <label htmlFor="pepperoni">Add pepperoni</label>

      <h2>Your Toppings:</h2>
      <ul>
        <li>Cheese</li>
        {pepperoniIsChecked && <li>Pepperoni</li>}
      </ul>

      <h2>Select Size</h2>
      <select aria-label="Select Size" value={size} onChange={handleSizeChange}>
        <option value="small">Small</option>
        <option value="medium">Medium</option>
        <option value="large">Large</option>
      </select>

      <h2>Your Selection</h2>
      <p>{size} {pepperoniIsChecked ? "Pepperoni" : "Cheese"}</p>

      <h2>Contact Info</h2>
      <input type="text" placeholder="Email address" />

      <button onClick={placeOrder}>Submit Order</button>

      {orderPlaced && <p>Thanks for your order!</p>}
    </div>
  );
}

export default App;
