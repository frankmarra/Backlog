import GameCard from './GameCard'

const SearchResults = ({ searchResults, showGame }) => {
  return (
    <div className="search-results-wrapper">
      <div className="search-results">
        {searchResults.map((result) => (
          <GameCard
            key={result.id}
            name={result.name}
            image={result.background_image}
            rating={result.rating}
            id={result.id}
            onClick={showGame}
          />
        ))}
      </div>
    </div>
  )
}

export default SearchResults
