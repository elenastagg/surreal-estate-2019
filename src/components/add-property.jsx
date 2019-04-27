import React, { Component } from 'react';
import '../styles/page-titles.css';
import '../styles/add-property.css';

class AddProperty extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      type: 'Property Type',
      city: 'City',
      bedrooms: '',
      bathrooms: '',
      price: '',
      email: '',
    };
  }

  handleAddProperty = (event) => {
    event.preventDefault();
    console.log(this.state);
    // this.setState({});
  };

  handleFieldChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    return (
      <div className="addproperty">
        <div className="title title-box">List a Property</div>
        <form onSubmit={this.handleAddProperty}>

          <input name="title" placeholder="Listing Title" value={this.state.title} onChange={this.handleFieldChange} />

          <select name="type" value={this.state.type} onChange={this.handleFieldChange}>
            <option disabled value="Property Type">Property Type</option>
            <option value="Flat">Flat</option>
            <option value="Detached">Detached</option>
            <option value="Semi-Detached">Semi-Detached</option>
            <option value="Terraced">Terraced</option>
            <option value="End of Terrace">End of Terrace</option>
            <option value="Cottage">Cottage</option>
            <option value="Bungalow">Bungalow</option>
          </select>

          <select name="city" value={this.state.city} onChange={this.handleFieldChange}>
            <option disabled value="City">City</option>
            <option value="Manchester">Manchester</option>
            <option value="Leeds">Leeds</option>
            <option value="Sheffield">Sheffield</option>
            <option value="Liverpool">Liverpool</option>
          </select>

          <input name="bedrooms" placeholder="No. of Bedrooms" value={this.state.bedrooms} onChange={this.handleFieldChange} />
          <input name="bathrooms" placeholder="No. of Bathrooms" value={this.state.bathrooms} onChange={this.handleFieldChange} />
          <input name="price" placeholder="Price" value={this.state.price} onChange={this.handleFieldChange} />
          <input name="email" placeholder="Email" value={this.state.email} onChange={this.handleFieldChange} />

          <button type="submit">Add</button>
        </form>
      </div>
    );
  }
}

export default AddProperty;
