import React from "react"

function SearchResults({ results }) {

    return (
        <>
            {results.length > 0 ? (
                <>
                    {results.map(result => {
                        return (
                            <div key = {result.Title}>
                                <h2>{result.Title}</h2>
                                <p>{result.Text}</p>
                            </div>
                        )
                    })}
                    </>) : (<>Nothing found try and again</>)}
        </>

    )
}

export default SearchResults