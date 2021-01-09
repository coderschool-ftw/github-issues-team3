import React, { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import Nav from "./components/Nav";
import SearchForm from "./components/SearchForm";
function App() {
  const [issues, setIssues] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [url, setUrl] = useState("");

  useEffect(() => {
    const getData = async () => {
      if (url !== "") {
        let data = await fetch(url);
        let json = await data.json();
        console.log(json);
        setIssues(json);
      }
    };
    getData();
  }, [url]);
  const handleClick = () => {
    setUrl(`https://api.github.com/repos/${searchTerm}/issues`);
  };

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <Container>
      <Nav />
      <SearchForm
        handleChange={handleChange}
        handleClick={handleClick}
        value={searchTerm}
      />
    </Container>
  );
}

export default App;
