import React from 'react';
import PropTypes from 'prop-types';
import '../styles/property-card.css';
import house from '../Images/temphouse.jpeg';

const PropertyCard = props => (
  <div className="property-box">
    <div className="house-image"> <img src={house} /></div>
    <div className="property-elements-box">
      <div className="property-card-title property-card-element">{props.title}</div>
      <div className="property-card-element">Property Type: {props.type}</div>
      <div className="property-card-element">Bathrooms: {props.bathrooms}</div>
      <div className="property-card-element">Bedrooms: {props.bedrooms}</div>
      <div className="property-card-element">&#163;{props.price}</div>
      <div className="property-card-element">City: {props.city}</div>
      <div className="property-card-element">Contact: {props.email}</div>
      <div className="property-card-element">
        <button className="view-button" onClick={() => props.onSelect()}>View</button>
      </div>
    </div>
  </div>

);

PropertyCard.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  bathrooms: PropTypes.number.isRequired,
  bedrooms: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  city: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

export default PropertyCard;
