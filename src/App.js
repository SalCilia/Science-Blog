import React, { useState } from 'react';
import './App.css';
import { Switch, Route, useHistory } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./components/home";
import SearchResults from "./components/searchresults";

function App() {
  const BLOGPOSTS = [{
    "Title": "Post 1",
    "Author": "Sal",
    "Text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fermentum nunc odio, sed ultrices nisl laoreet in. Mauris accumsan justo sit amet tincidunt condimentum. Vivamus faucibus libero id rhoncus aliquet. Nullam mattis ligula ac neque sodales, id ultricies lectus tristique. Cras luctus tellus odio, in euismod nisi vulputate id. Maecenas euismod vehicula varius. Nunc elementum sem sapien, at vulputate ex ornare in. Nam pellentesque vulputate urna at pretium. Integer tincidunt lorem sit amet dui finibus, eu feugiat ante sollicitudin. Nam in arcu sapien Proin vitae nulla tellus. Maecenas elementum consectetur tortor. In porta pellentesque feugiat. Morbi lobortis facilisis mi a luctus. Praesent quis ultrices orci. Pellentesque quis pharetra ex. Vestibulum lobortis, urna ac sodales dictum, metus ipsum bibendum justo, non consectetur nisi nibh id eros. Nulla non dictum ex. In id efficitur massa. Donec tincidunt massa a mauris vulputate sodales. Integer non tortor sem. Morbi condimentum commodo dui vitae aliquet. Vivamus blandit ultricies neque, et pulvinar nisi vulputate Sed blandit tortor non lectus lacinia, at sagittis dolor efficitur. In hac habitasse platea dictumst. Nunc et eros maximus elit placerat gravida nec quis nulla. Proin lorem enim, lobortis non iaculis vitae, luctus non metus. Sed ornare vitae lorem sed venenatis. Ut pulvinar felis vitae lorem pellentesque, nec venenatis dui venenatis. Nunc ultrices tellus tellus, non molestie neque eleifend at. Suspendisse laoreet ex eget egestas gravida. Donec ut quam luctus, viverra risus et, finibus sem. Suspendisse pellentesque scelerisque nisi. Integer ullamcorper nunc in sapien vehicula gravida. Morbi vel interdum nibh. Donec dolor ex, posuere vitae bibendum eu, pretium eu erat.               Etiam a convallis diam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi eleifend, elit sed pulvinar tempor, orci quam feugiat dui, sit amet porta orci leo ac felis. Suspendisse in rhoncus ipsum, et rutrum quam. Nullam auctor libero lacus, nec fermentum sapien cursus a. Cras sodales lacus orci, nec mollis ligula varius non. Phasellus a molestie sapien. Mauris"
  }, {
    "Title": "Post 2",
    "Author": "Sal",
    "Text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fermentum nunc odio, sed ultrices nisl laoreet in. Mauris accumsan justo sit amet tincidunt condimentum. Vivamus faucibus libero id rhoncus aliquet. Nullam mattis ligula ac neque sodales, id ultricies lectus tristique. Cras luctus tellus odio, in euismod nisi vulputate id. Maecenas euismod vehicula varius. Nunc elementum sem sapien, at vulputate ex ornare in. Nam pellentesque vulputate urna at pretium. Integer tincidunt lorem sit amet dui finibus, eu feugiat ante sollicitudin. Nam in arcu sapien Proin vitae nulla tellus. Maecenas elementum consectetur tortor. In porta pellentesque feugiat. Morbi lobortis facilisis mi a luctus. Praesent quis ultrices orci. Pellentesque quis pharetra ex. Vestibulum lobortis, urna ac sodales dictum, metus ipsum bibendum justo, non consectetur nisi nibh id eros. Nulla non dictum ex. In id efficitur massa. Donec tincidunt massa a mauris vulputate sodales. Integer non tortor sem. Morbi condimentum commodo dui vitae aliquet. Vivamus blandit ultricies neque, et pulvinar nisi vulputate Sed blandit tortor non lectus lacinia, at sagittis dolor efficitur. In hac habitasse platea dictumst. Nunc et eros maximus elit placerat gravida nec quis nulla. Proin lorem enim, lobortis non iaculis vitae, luctus non metus. Sed ornare vitae lorem sed venenatis. Ut pulvinar felis vitae lorem pellentesque, nec venenatis dui venenatis. Nunc ultrices tellus tellus, non molestie neque eleifend at. Suspendisse laoreet ex eget egestas gravida. Donec ut quam luctus, viverra risus et, finibus sem. Suspendisse pellentesque scelerisque nisi. Integer ullamcorper nunc in sapien vehicula gravida. Morbi vel interdum nibh. Donec dolor ex, posuere vitae bibendum eu, pretium eu erat.               Etiam a convallis diam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi eleifend, elit sed pulvinar tempor, orci quam feugiat dui, sit amet porta orci leo ac felis. Suspendisse in rhoncus ipsum, et rutrum quam. Nullam auctor libero lacus, nec fermentum sapien cursus a. Cras sodales lacus orci, nec mollis ligula varius non. Phasellus a molestie sapien. Mauris"
  }, {
    "Title": "Post 3",
    "Author": "Sal",
    "Text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fermentum nunc odio, sed ultrices nisl laoreet in. Mauris accumsan justo sit amet tincidunt condimentum. Vivamus faucibus libero id rhoncus aliquet. Nullam mattis ligula ac neque sodales, id ultricies lectus tristique. Cras luctus tellus odio, in euismod nisi vulputate id. Maecenas euismod vehicula varius. Nunc elementum sem sapien, at vulputate ex ornare in. Nam pellentesque vulputate urna at pretium. Integer tincidunt lorem sit amet dui finibus, eu feugiat ante sollicitudin. Nam in arcu sapien Proin vitae nulla tellus. Maecenas elementum consectetur tortor. In porta pellentesque feugiat. Morbi lobortis facilisis mi a luctus. Praesent quis ultrices orci. Pellentesque quis pharetra ex. Vestibulum lobortis, urna ac sodales dictum, metus ipsum bibendum justo, non consectetur nisi nibh id eros. Nulla non dictum ex. In id efficitur massa. Donec tincidunt massa a mauris vulputate sodales. Integer non tortor sem. Morbi condimentum commodo dui vitae aliquet. Vivamus blandit ultricies neque, et pulvinar nisi vulputate Sed blandit tortor non lectus lacinia, at sagittis dolor efficitur. In hac habitasse platea dictumst. Nunc et eros maximus elit placerat gravida nec quis nulla. Proin lorem enim, lobortis non iaculis vitae, luctus non metus. Sed ornare vitae lorem sed venenatis. Ut pulvinar felis vitae lorem pellentesque, nec venenatis dui venenatis. Nunc ultrices tellus tellus, non molestie neque eleifend at. Suspendisse laoreet ex eget egestas gravida. Donec ut quam luctus, viverra risus et, finibus sem. Suspendisse pellentesque scelerisque nisi. Integer ullamcorper nunc in sapien vehicula gravida. Morbi vel interdum nibh. Donec dolor ex, posuere vitae bibendum eu, pretium eu erat.               Etiam a convallis diam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi eleifend, elit sed pulvinar tempor, orci quam feugiat dui, sit amet porta orci leo ac felis. Suspendisse in rhoncus ipsum, et rutrum quam. Nullam auctor libero lacus, nec fermentum sapien cursus a. Cras sodales lacus orci, nec mollis ligula varius non. Phasellus a molestie sapien. Mauris"
  }]
  const [blogPosts, setBlogPosts] = useState(BLOGPOSTS)
  const [selectedPost, setSelectedPost] = useState(null)
  const [search, setSearch] = useState("")
  const [results, setResults] = useState([])
  const history = useHistory()

  function executeSearch() {
    blogPosts.forEach(post => {
      if (post.Text.includes(search)) {
        let newResults = results.slice()
        newResults.push(post)
        setResults(newResults)
      }
    })
    history.push("/search")
  }

  return (
    <div>
      <div><h1>TITLE</h1></div>
      <Navbar search={search} setSearch={setSearch} executeSearch={executeSearch} />
      <Switch>
        <Route exact path="/">
          <Home posts={blogPosts} />
        </Route>
        <Route path="/about">
          ABOUT AUTHOR
      </Route>
        <Route path="/search">
          <SearchResults results={results} />
        </Route>
      </Switch>
      <div><p>footer</p></div>


    </div>
  );
}

export default App;
