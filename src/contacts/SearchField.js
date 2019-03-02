import React, { Component } from 'react'

export default class SearchField extends Component {
  render() {
    const { onSearch, placeholder } = this.props;

    return (
      <div className="search-field">
        <input placeholder={placeholder} type="text" onChange={e => onSearch(e.target.value)}/>
      </div>
    )
  }
}
