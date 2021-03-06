import React from "react";
import BlogPost from "./blogpost"

function Home({posts}) {
    return (
        <div>
            {posts.map(post => {
                return(
                    <BlogPost post={post} key={post.Title}/>
                )
            })}
        </div>
    )
}
export default Home