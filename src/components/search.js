import React from "react"


function Search(props) {
    function handleChange(event) {
        props.setSearch(event.target.value)
    }
    function handleClick (event) {
        props.executeSearch()
    }
    return (
    <>
        <input value={props.search} onChange={handleChange} />
        <button onClick={handleClick}> Search </button>
    </>
    )
}












export default Search; 