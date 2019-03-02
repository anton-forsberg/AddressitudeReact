import React, { Component } from 'react'
import { OrderByFields } from '../store/config';

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
              {orderByField}
              <i className={field === orderByField && reverse ? 'fas fa-sort-alpha-up' : 'fas fa-sort-alpha-down'}></i>
            </li>
          )
        })
      }
      </ul>
    )
  }
}