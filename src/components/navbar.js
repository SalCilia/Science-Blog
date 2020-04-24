import React from "react"
import { Link } from "react-router-dom"
import Search from "./search"

function Navbar(props) {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/"> Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                </ul>

            </nav>
            < Search search={props.search} setSearch={props.setSearch} executeSearch={props.executeSearch}/>
        </>
    )
}

export default Navbar