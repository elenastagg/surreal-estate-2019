import React from 'react';
import { shallow } from 'enzyme';
import PropertyCard from '../src/components/property-card';

let wrapper;

beforeEach(() => {
  wrapper = shallow((
    <PropertyCard
      tite="mockTitle"
      type="mockType"
      city="mockCity"
      bedrooms={1}
      bathrooms={2}
      price={3}
      email="mock@email.com"
    />
  ));
});
it('renders the title', () => {
  expect(wrapper.find('property-card__title').text().toEqual('mockTitle'));
});

it('renders the property type', () => {
  expect(wrapper.find('property-card__type').text().toEqual('mockType'));
});

it('renders the city', () => {
  expect(wrapper.find('property-card__city').text().toEqual('mockCity'));
});

it('renders the bedrooms', () => {
  expect(wrapper.find('property-card__bedrooms').text().toEqual('1'));
});

it('renders the bathrooms', () => {
  expect(wrapper.find('property-card__bathrooms').text().toEqual('2'));
});

it('renders the price', () => {
  expect(wrapper.find('property-card__price').text().toEqual('£3'));
});

it('renders the email', () => {
  expect(wrapper.find('property-card__email').text().toEqual('mock@email.com'));
});
