
import { useCallback, useState } from "react";
import { FaSearch } from "react-icons/fa";

import "./SearchBar.css";

export const SearchBar = ({ setResults }) => {
  const [input, setInput] = useState("");

 const debounce = (func) => {
    let timer;
    return function(...args){
        let context = this;
        if(timer) clearTimeout(timer);
        timer = setTimeout(() => {
           timer = null;
           func.apply(context, args)
        }, 500)
    }
 }

  const fetchData = (value) => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => {
        const results = json.filter((user) => {
          return (
            value &&
            user &&
            user.name &&
            user.name.toLowerCase().includes(value)
          );
        });
        setResults(results);
      });
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };

  const optimisedVersion = useCallback(debounce(handleChange),[]);

  return (
    <div className="input-wrapper">
      <FaSearch id="search-icon" />
      <input
        placeholder="Type to search..."
        value={input}
        onChange={(e) => optimisedVersion(e.target.value)}
      />
    </div>
  );
};