import React from 'react';
import './App.css';

const MEDICINES = [
  { name: 'Paracetamol', price: 2.99 },
  { name: 'Ibuprofen', price: 3.99 },
  { name: 'Aspirin', price: 1.99 },
  { name: 'Amoxicillin', price: 5.99 },
];

function App() {
  const [selectedMedicine, setSelectedMedicine] = React.useState(null);
  const [quantity, setQuantity] = React.useState(0);
  const [totalBill, setTotalBill] = React.useState(0);

  function handleSelectMedicine(event) {
    const medicineName = event.target.value;
    const medicine = MEDICINES.find((m) => m.name === medicineName);
    setSelectedMedicine(medicine);
    setQuantity(0);
  }

  function handleQuantityChange(event) {
    const quantity = Number(event.target.value);
    setQuantity(quantity);
  }

  function handleAddToCart() {
    if (selectedMedicine && quantity > 0) {
      setTotalBill(totalBill + selectedMedicine.price * quantity);
      setSelectedMedicine(null);
      setQuantity(0);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Pharmacy App</h1>
        <p>Total Bill: ₹ {totalBill.toFixed(2)}</p>
      </header>
      <main>
        <h2>Medicines:</h2>
        <select value={selectedMedicine?.name} onChange={handleSelectMedicine}>
          <option value="">Select a medicine</option>
          {MEDICINES.map((medicine, index) => (
            <option key={index} value={medicine.name}>
              {medicine.name} - ₹{medicine.price.toFixed(2)}
            </option>
          ))}
        </select>
        {selectedMedicine && (
          <div>
            <label>
              Quantity:
              <input
                type="number"
                value={quantity}
                onChange={handleQuantityChange}
              />
            </label>
            <button onClick={handleAddToCart}>Add to Cart</button>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;