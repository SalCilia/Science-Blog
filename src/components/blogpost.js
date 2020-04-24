import React from "react"

function BlogPosts ({post : {Title, Author, Text}}) {
    return(
        <ul>
            <li>
                {Title}
            </li>
            <li>
                {Author}
            </li>
            <li>
                {Text.slice(0,100)}
            </li>
        </ul>
    )
}
export default BlogPosts