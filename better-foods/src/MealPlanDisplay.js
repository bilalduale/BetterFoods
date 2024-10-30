import React from "react";
import { FaDownload } from "react-icons/fa";
import jsPDF from "jspdf";
import "jspdf-autotable";

export default class MealPlanDisplay extends React.Component {
  state = {
    planName: "",
  };

  handlePlanNameChange = (event) => {
    this.setState({ planName: event.target.value.trim() });
  };

  downloadMealPlan = () => {
    const { planName } = this.state;
    const { selectedItems } = this.props;
    const itemsArray = Object.values(selectedItems);

    const getDefaultFileName = () => {
      const today = new Date();
      const day = String(today.getDate()).padStart(2, '0');
      const month = String(today.getMonth() + 1).padStart(2, '0'); 
      const year = today.getFullYear();
      return `${month}-${day}-${year}`;
    };

    const fileName = planName || getDefaultFileName();

    const doc = new jsPDF();
    doc.text("Your Meal Plan", 14, 22);
    doc.autoTable({
      head: [['Product Name', 'Quantity', 'Price', 'Nutrition']],
      body: itemsArray.map(item => [item.name, item.quantity, item.price, item.nutrition]),
      startY: 30,
      theme: 'grid',
    });

    doc.save(`${fileName}.pdf`);
  };

  render() {
    const { selectedItems } = this.props;
    const itemsArray = Object.values(selectedItems);
    const { planName } = this.state;

    return (
      <div className="meal-plan-display">
        <h2>Your Meal Plan</h2>
        <input
          type="text"
          placeholder="Enter a name for this plan"
          value={planName}
          onChange={this.handlePlanNameChange}
        />
        <table>
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Nutrition</th>
            </tr>
          </thead>
          <tbody>
            {itemsArray.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.quantity}</td>
                <td>{item.price}</td>
                <td>{item.nutrition}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {itemsArray.length > 0 && (
          <button
            className="download-button"
            onClick={this.downloadMealPlan}
          >
            Download Meal Plan <FaDownload />
          </button>
        )}
      </div>
    );
  }
}