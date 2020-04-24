import React, { Fragment } from "react";
import BlogPost from "./blogpost"

function Home({posts}) {
    return (
        <div>
            {posts.map(post => {
                return(
                    <BlogPost post={post} />
                )
            })}
        </div>
    )
}
export default Home