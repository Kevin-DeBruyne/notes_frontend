import React, { useState } from "react";
import axios from "axios";
function CreateArea() {
    const [head, sethead] = useState("");
    const [body, setbody] = useState("");
  const handleInputChange = (e) => {
      sethead(e.target.value);
    };
    const handlebodyChange = (e) => {
      setbody(e.target.value);
  }; 
  const article = {
    title: head,
    content : body
  }
   const handleSubmit = (e) => {
     e.preventDefault();
     fetch("http://localhost:5000/articles", {
       method: "POST",
       headers: {
         "Content-Type": "application/json",
       },
       body: JSON.stringify(article)
     })
       .then((response) => {
         console.log(response);
         return response.text();
         // Do something with the response
       })
       .then((data) => {
         console.log(data);
       })
       .catch((error) => {
         console.log(error);
         // Handle the error
       });
   };
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              name="title"
              placeholder="Title"
              onChange={handleInputChange}
            />
            <br />
            <textarea
              placeholder="Take a note..."
              onChange={handlebodyChange}
            ></textarea>
          </div>
          <br />
          <div style={{ width: "30%" }}>
            <button className="btn btn-success" type="submit">
              Create
            </button>
          </div>
        </form>
      </div>
    );
}

export default CreateArea;
