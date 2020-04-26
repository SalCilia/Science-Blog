import React from "react";
import SearchResult from "./searchresult";

function SearchResults({ results }) {
  function render() {
    return (
      <>
        {results.length > 0 ? (
          <>
            {results.map((result) => {
              return <SearchResult post={result} key={result.Title} />;
            })}
          </>
        ) : (
          <>
            <br />
            Nothing found try and again
          </>
        )}
      </>
    );
  }

  return render();
}

export default SearchResults;
