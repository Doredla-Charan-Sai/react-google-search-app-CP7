// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {onArrow, itemDetails} = props
  const clickArrow = () => {
    onArrow(itemDetails.suggestion)
  }
  return (
    <li className="sugg-cont">
      <p className="sugg-para">{itemDetails.suggestion}</p>
      <img
        className="arrow"
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        alt="arrow-icon"
        onClick={clickArrow}
      />
    </li>
  )
}

export default SuggestionItem
