import React, { useState, useEffect } from "react";
import Note from "./Note";
import Header from "./Header";
import Footer from "./Footer";
import CreateArea from "./CreateArea";

function App() {
  // const [name, setName] = useState("");
  const [Array, setArray] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/articles")
      .then((response) => response.json())
      .then((data) => {
        // data.user = name;
        setArray(data);
        console.log(Array);
      });
    //eslint-disable-next-line
  }, []);
  return (
    <div>
      <Header />
      <CreateArea/>
      {Array.map((x) => (
        <Note head={x.title} body={x.content} />
      ))}
      <Footer />
    </div>
  );
}

export default App;
