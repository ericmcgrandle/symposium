import './conversation-styles/sortby.scss'

export default function SortBy (props) {

  // CATEGORY BUTTON IS HARDCODED TO 1
  // SEARCH BUTTON IS HARDCODED TO SAMPLE POD

  return (
    <ul className="sort-by">
      <li><button onClick={() => { props.changeState('conversations') } }>All</button></li>
      <li><button onClick={() => { props.changeState('conversations/category/1') } }>Category</button></li>
      <li><button onClick={() => { props.changeState('conversations/podcast/Sample%20Pod') } }>Search</button></li>
    </ul>
  )
}