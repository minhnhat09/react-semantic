import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  onInputChange = event => {
    this.setState({ term: event.target.value });
    this.props.onFormSubmit(event.target.value);
  };

  render() {
    return (
      <div className="ui search">
        <div className="ui icon input">                                                          
          <input
            className="prompt"
            placeholder="Search..."
            type="text"
            value={this.state.term}
            onChange={this.onInputChange}
          />
          <i className="search icon" />
        </div>
        <div className="results" />
      </div>
    );
  }
}

export default SearchBar;
