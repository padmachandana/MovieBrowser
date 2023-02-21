import "./App.css";
import NavBar from "./components/NavBar";
import HomeView from "./components/Home";
import AboutView from "./components/About";
import { Routes, Route } from "react-router-dom";
import SearchView from "./components/Search";
import { useState, useEffect } from "react";
import MovieView from "./components/MovieView";
import NotFound from "./components/NotFound";
import NoResult from "./components/NoResult";
function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    if (searchText) {
      fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=09af01581eb0d504adddf420bf7f4d03&language=en-US&query=${searchText}&page=1&include_adult=false`
      )
        .then((response) => response.json())
        .then((data) => {
          setSearchResults(data.results);
        });
    }
  }, [searchText]);

  return (
    <div className="App">
      <NavBar searchText={searchText} setSearchText={setSearchText} />

      <Routes>
        <Route path="/*" element={<NotFound />} />
        <Route path="/noresult" element={<NoResult />} />
        <Route path="/" element={<HomeView />} />
        <Route path="/about" element={<AboutView />} />
        <Route
          path="/search"
          element={
            <SearchView keyword={searchText} searchResults={searchResults} />
          }
        />
        <Route path="/movies/:id" element={<MovieView />} />
      </Routes>
    </div>
  );
}

export default App;
