import { Component } from 'react'

type Props = {
  setSearchInput: (value: string) => void
}

export class Search extends Component<Props> {
  handleInputChange = (e: any) => {
    this.props.setSearchInput(e.target.value)
  }
  render() {
    return (
      <div className='search'>
        <input type="text" placeholder='search for a book' onChange={this.handleInputChange} />
      </div>
    )
  }
}
