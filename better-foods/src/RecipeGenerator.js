import React from 'react';
import './Recipe.css';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { withRouter } from './Router_Extend';

class RecipeGenerator extends React.Component {
  state = {
    searchQuery: '',
    items: Array(9).fill({ name: 'Apple', quantity: 1, price: '$1.00', nutrition: 'Vitamin' }),
    mealPlan: [],
    selectedItems: {},
    errorMessage: ''
  };

  handleSearchChange = (event) => {
    const { value } = event.target;
    let errorMessage = '';
    if (value.length > 0 && value.length <= 2) {
      errorMessage = 'Please enter at least 2 characters for plan name';
    }
    this.setState({ searchQuery: value, selectedItems: {}, errorMessage: errorMessage });
  };

  toggleItemSelection = (index) => {
    this.setState(prevState => {
      const newSelectedItems = { ...prevState.selectedItems };
      if (newSelectedItems[index]) {
        delete newSelectedItems[index];
      } else {
        newSelectedItems[index] = prevState.items[index];
      }
      this.props.updateSelectedItems(newSelectedItems);
      return { selectedItems: newSelectedItems };
    });
  };

  addToMealPlan = () => {
    const { selectedItems } = this.state;
    const newItems = Object.values(selectedItems);
    this.setState({
      mealPlan: [...newItems],
      selectedItems: {}
    });
    this.props.navigate('/mealplan');
  };

  render() {
    const { searchQuery, items, selectedItems, errorMessage } = this.state;
    const filteredItems = searchQuery.length > 1 ? items.filter(item => item.name.toLowerCase().includes(searchQuery.toLowerCase())) : items;

    return (
      <div className="App">
        <div className="header">
          <h2>Based on your budget and eating style, here is the plan...</h2>
        </div>
        <div className="main-content">
          <div className="plan-container">
            <div className="search-bar">
              <input
                type="text"
                placeholder="Search or enter plan name"
                value={searchQuery}
                onChange={this.handleSearchChange}
              />
              {errorMessage && <div className="error-message">{errorMessage}</div>}
            </div>
            <table>
              <thead>
                <tr>
                  <th>Product Name</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>Nutrition</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredItems.map((item, index) => (
                  <tr key={index} 
                      onClick={() => this.toggleItemSelection(index)}
                      style={{ backgroundColor: selectedItems[index] ? '#c8e6c9' : '' }}>
                    <td>{item.name}</td>
                    <td>{item.quantity}</td>
                    <td>{item.price}</td>
                    <td>{item.nutrition}</td>
                    <td>
                      <FaEdit className="icon edit-icon" />
                      <FaTrash className="icon trash-icon" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {Object.keys(selectedItems).length > 0 && (
              <button className="save-button" onClick={this.addToMealPlan}>Add to Plan</button>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(RecipeGenerator);