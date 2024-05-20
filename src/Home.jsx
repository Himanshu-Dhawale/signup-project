import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CardsList from "./components/CardsList";
import Input from "./components/Input";
import Error from "./components/Error";
import Button from "./components/Button";

const Home = () => {
  const [initData, setInitData] = useState();
  const [character, setCharacter] = useState();
  const [searchQuery, setSearchQuery] = useState();
  const [noResult, setNoResult] = useState(false);
  const [totalPages, setTotalPages] = useState();
  const [currentPage, setCurrentPage] = useState(1);

  const getSearch = (e) => {
    // console.log(e.target.value);
    setSearchQuery(e.target.value);
    filterCharacters();
  };

  const filterCharacters = () => {
    if (searchQuery) {
      const searchResults = initData.filter((item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setCharacter(searchResults);
      setNoResult(searchResults.length === 0);
      // console.log(searchResults);
    } else {
      setCharacter(initData);
    }
  };

  const getCharacters = async (page = 1) => {
    try {
      const charData = await fetch(
        `https://rickandmortyapi.com/api/character?page=${page}`
      );
      const response = await charData.json();
      // console.log(response.results);
      setInitData(response.results);
      setCharacter(response.results);
      setTotalPages(response.info.pages);
      console.log("API request");
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getCharacters();
  }, []);

  const getPage = (newPage) => {
    setCurrentPage(newPage);
    getCharacters(newPage);
    console.log("getting page");
  };
  return (
    <div className="flex flex-col justify-between border-yellow-500 h-[100vh]">
      <Header />
      <Input
        type="text"
        placeholder="type your character..."
        changeHandler={getSearch}
      />
      {noResult ? <Error /> : <CardsList characters={character} />}
      {totalPages && (
        <div className="flex gap-4 justify-center">
          <Button
            buttonLabel="prev"
            clickHandler={() => getPage(currentPage - 1)}
          />
          <p>
            page {currentPage} of {totalPages}
          </p>
          <Button
            buttonLabel="next"
            clickHandler={() => getPage(currentPage + 1)}
          />
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Home;
