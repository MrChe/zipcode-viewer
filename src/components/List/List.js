import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class List extends PureComponent {
  static propTypes = {
    places: PropTypes.array.isRequired,
    onRemoveListItem: PropTypes.func.isRequired,
  };

  static defaultProps = {
  };

  constructor(props) {
    super(props);
  }

  renderListItem = (data = []) => {
    return data.map((item, index) => {
      return (
        <li key={index}>
          <p>
            <span>State:{item["state"]} </span>
            <span>Place:{item["place name"]} </span>
            <i onClick={() => this.props.onRemoveListItem(index)}>&#65794;</i>
          </p>
        </li>
      )
    })
  };

  render() {
    const { places } = this.props;
    return(
      <ul>
        {this.renderListItem(places)}
      </ul>
    )
  }
}

export default List
