import React, { PureComponent, createRef } from 'react';
import { connect } from 'react-redux';
import SearchForm from '../../components/SearchForm';
import List from '../../components/List';
import { fetchZipCode, onAddPlace, onRemovePlace, onChangeZipCode } from '../../actions/zipCodes';
import zipCodesSelectors from '../../selectors/zipCodes';

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.searchInputRef = createRef();
  }

  handleChangeZipCode = (e) => {
    const val = e.target.value;
    this.props.onChangeZipCode(val);
  };

  handleSubmitForm = (e) => {
    e.preventDefault();
    this.props.fetchZipCode(this.props.zipCodeNumber);
    this.searchInputRef.current.value = '';
  };

  render() {
    return(
      <div>
        <SearchForm
         onSubmitData={this.handleSubmitForm}
         onChangeZipCode={this.handleChangeZipCode}
         inputRef={this.searchInputRef}
         />
        <List
          places={this.props.listPlace}
          onRemoveListItem={this.props.onRemovePlace}
        />
      </div>
    )
  }
}

export default connect(
  // selectors
  zipCodesSelectors,
  { //actions
    fetchZipCode,
    onAddPlace,
    onRemovePlace,
    onChangeZipCode,
  }
)(App)
