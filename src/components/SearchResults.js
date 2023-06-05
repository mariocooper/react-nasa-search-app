import React from "react";
import "../styles/searchResults.css";

function SearchResults({ results }) {
    if (!results.length) {
        return <p>No results</p>
      } else {
        return (
          <div className="search-results">
            <img
                className="moon-image" 
                src="https://images.unsplash.com/photo-1522030299830-16b8d3d049fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
                alt="moon">
            </img>
          </div>
        );
    };
};

export default SearchResults;
