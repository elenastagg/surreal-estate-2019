import React, { Component } from 'react';
import Alert from './alert.jsx';
import '../styles/page-titles.css';
import '../styles/add-property.css';

const axios = require('axios');

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
      alertMessage: '',
      isSuccess: false,
      isError: false,
    };
  }


  handleFieldChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleAddProperty = (event) => {
    event.preventDefault();
    this.setState({
      alertMessage: '',
      isSuccess: false,
      isError: false,
    });
    axios.post('http://localhost:3000/api/v1/PropertyListing/', this.state)
      .then(() => this.setState({
        isSuccess: true,
        alertMessage: 'Thank you, your property has been added',
      }))
      .catch(() => this.setState({
        isError: true,
        alertMessage: 'Server error. Please try again later',
      }));
  };

  render() {
    return (
      <div className="page add-property">
        <div className="title">List a Property</div>
        <form onSubmit={this.handleAddProperty}>
          {this.state.isSuccess && <Alert message={this.state.alertMessage} success />}
          {this.state.isError && <Alert message={this.state.alertMessage} />}
          <input name="title" className="input-box" placeholder="Listing Title" value={this.state.title} onChange={this.handleFieldChange} />

          <select name="type" className="select-box" value={this.state.type} onChange={this.handleFieldChange}>
            <option disabled value="Property Type">Property Type</option>
            <option value="Flat">Flat</option>
            <option value="Detached">Detached</option>
            <option value="Semi-Detached">Semi-Detached</option>
            <option value="Terraced">Terraced</option>
            <option value="End of Terrace">End of Terrace</option>
            <option value="Cottage">Cottage</option>
            <option value="Bungalow">Bungalow</option>
          </select>

          <select name="city" className="select-box" value={this.state.city} onChange={this.handleFieldChange}>
            <option disabled value="City">City</option>
            <option value="Manchester">Manchester</option>
            <option value="Leeds">Leeds</option>
            <option value="Sheffield">Sheffield</option>
            <option value="Liverpool">Liverpool</option>
          </select>

          <input name="bedrooms" className="input-box" type="number" placeholder="No. of Bedrooms" value={this.state.bedrooms} onChange={this.handleFieldChange} />
          <input name="bathrooms" className="input-box" type="number" placeholder="No. of Bathrooms" value={this.state.bathrooms} onChange={this.handleFieldChange} />
          <input name="price" className="input-box" type="number" placeholder="Price" value={this.state.price} onChange={this.handleFieldChange} />
          <input name="email" className="input-box" placeholder="Email" value={this.state.email} onChange={this.handleFieldChange} />

          <button className="submit-button" type="submit">Add Property</button>
        </form>
      </div>
    );
  }
}

export default AddProperty;
