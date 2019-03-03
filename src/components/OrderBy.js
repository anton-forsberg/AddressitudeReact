import React, { Component } from 'react'
import { OrderByFields } from '../store/config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class OrderBy extends Component {
  setOrder = field => {
    let reverse = false;

    if (field === this.props.field) {
      reverse = !this.props.reverse;
    }

    this.props.onOrder(field, reverse);
  }

  render() {
    const { field, reverse } = this.props;

    return (
      <ul className="order-by">
      {
        OrderByFields.map(orderByField => {
          return (
            <li key={orderByField} className={field === orderByField ? 'active' : ''} onClick={() => this.setOrder(orderByField)}>
              {orderByField}&nbsp;
              {
                field === orderByField && reverse ? (
                  <FontAwesomeIcon icon="sort-alpha-up" />
                ) : (
                  <FontAwesomeIcon icon="sort-alpha-down" />
                )
              }
            </li>
          )
        })
      }
      </ul>
    )
  }
}