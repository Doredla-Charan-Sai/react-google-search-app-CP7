// Write your code here
import {Component} from 'react'
import SuggestionItem from '../SuggestionItem'
import './index.css'

class GoogleSuggestions extends Component {
  state = {searchItem: ''}

  onSearch = event => {
    this.setState({searchItem: event.target.value})
  }

  onArrow = suggestion => {
    this.setState({searchItem: suggestion})
  }

  render() {
    const {suggestionsList} = this.props
    const {searchItem} = this.state
    const searchResult = suggestionsList.filter(item =>
      item.suggestion.toLowerCase().includes(searchItem.toLowerCase()),
    )
    return (
      <div className="bg-cont">
        <img
          className="google-img"
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt="google logo"
        />
        <div className="content">
          <div className="search-cont">
            <img
              className="img-icon"
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="search icon"
            />
            <input
              type="search"
              placeholder="search"
              className="search"
              onChange={this.onSearch}
              value={searchItem}
            />
          </div>
          <ul className="list">
            {searchResult.map(each => (
              <SuggestionItem
                itemDetails={each}
                onArrow={this.onArrow}
                key={each.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
