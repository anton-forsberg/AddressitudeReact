import React, { PureComponent } from 'react'
import { OrderByFields } from '../config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class OrderBy extends PureComponent {
  setOrder = field => {
    const { orderByField, orderByReverse } = this.props;

    let reverse = false;

    if (field === orderByField)
      reverse = !orderByReverse;

    this.props.onOrder(field, reverse);
  }

  render() {
    const { orderByField, orderByReverse } = this.props;

    return (
      <ul className="order-by">
      {
        OrderByFields.map(field => {
          return (
            <li key={field} className={orderByField === field ? 'active' : ''} onClick={() => this.setOrder(field)}>
              {field}&nbsp;
              {
                orderByField === field && orderByReverse ? (
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

export default OrderBy;