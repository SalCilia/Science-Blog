import React from "react";

function SearchResult({ post: { Title, Author, Text, Index }}) {
  return (
      <ul>
        <li>{Title}</li>
        <li>{Author}</li>
        <li>{Text.slice(Index, Index + 100)}</li>
      </ul>
  );
}
export default SearchResult;