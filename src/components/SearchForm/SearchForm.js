import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class SearchForm extends PureComponent {
  static propTypes = {
    onSubmitData: PropTypes.func.isRequired,
    onChangeZipCode: PropTypes.func.isRequired,
    inputRef: PropTypes.object.isRequired,
  };

  static defaultProps = {
  };

  constructor(props) {
    super(props);
    this.state = {}
  }

  onKeyPress = (event) => {
    const keyCode = event.keyCode || event.which;
    const keyValue = String.fromCharCode(keyCode);
    if (/\+|-/.test(keyValue))
      event.preventDefault();
  };

  render() {
    const { onSubmitData, onChangeZipCode, inputRef } = this.props;
    return(
      <form onSubmit={onSubmitData}>
          <input
            ref={inputRef}
            type="number"
            onKeyPress={this.onKeyPress}
            onChange={onChangeZipCode}
          />
          <button type="submit">GO</button>
      </form>
    )
  }
}

export default SearchForm
