import React, { PureComponent } from 'react'

class SearchField extends PureComponent {
  render() {
    const { onSearch, placeholder,value } = this.props;

    return (
      <div className="search-field">
        <input placeholder={placeholder} value={value} type="text" onChange={e => onSearch(e.target.value)}/>
      </div>
    )
  }
}

export default SearchField;
