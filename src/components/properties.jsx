import React, { Fragment } from 'react';
import '../styles/page-titles.css';
import axios from 'axios';
import Alert from './alert';
import { Link } from 'react-router-dom';
import PropertyCard from './property-card';
import '../styles/main-content-box.css';
import '../styles/location-nav.css';

class Properties extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      properties: [],
      isError: false,
      alertMessage: '',
    };
  }

  componentDidMount() {
    axios.get('http://localhost:3000/api/v1/PropertyListing')
      .then((res) => {
        this.setState({
          properties: res.data,
        });
      })
      .catch(() => {
        this.setState({
          isError: true,
          alertMessage: 'There was a problem retrieving the properties',
        });
      });
  }

  render() {
    return (
      <Fragment>
        <div className="page properties-page">
          <span className="title">Property Listings</span>
          <div className="location-nav">
            <Link className="tab" to="/properties?sort=Manchester">Manchester</Link>
            <Link className="tab" to="/properties?sort=Leeds">Leeds</Link>
            <Link className="tab" to="/properties?sort=Sheffield">Sheffield</Link>
            <Link className="tab" to="/properties?sort=Liverpool">Liverpool</Link>
          </div>
          <div className="main-content-box">
            {this.state.properties.map(property => (
              <PropertyCard key={property._id} {...property}>
                {this.state.isError && <Alert message={this.state.alertMessage} />}
              </PropertyCard>
            ))}
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Properties;
