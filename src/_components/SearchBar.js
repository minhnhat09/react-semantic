import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  onInputChange = event => {
    this.setState({ term: event.target.value });
    this.props.onFormSubmit(event.target.value);
  };

  render() {
    return (
      <form className="ui form">
        <div className="field">
          <label>{this.props.label}</label>
          <input
            type="text"
            value={this.state.term}
            onChange={this.onInputChange}
          />
        </div>
      </form>
    );
  }
}

export default SearchBar;
