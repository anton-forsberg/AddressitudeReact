import React, { Component } from 'react'

export default class SearchField extends Component {
  render() {
    const { onSearch, placeholder,value } = this.props;

    return (
      <div className="search-field">
        <input placeholder={placeholder} value={value} type="text" onChange={e => onSearch(e.target.value)}/>
      </div>
    )
  }
}
