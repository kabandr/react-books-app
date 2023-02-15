import { Component } from "react";
import { SearchProps } from "../../types/types";

export class Search extends Component<SearchProps> {
  handleInputChange = (e: any) => {
    this.props.setSearchInput(e.target.value);
  };
  render() {
    return (
      <div className="search">
        <input
          type="text"
          placeholder="search for a book"
          onChange={this.handleInputChange}
        />
      </div>
    );
  }
}
