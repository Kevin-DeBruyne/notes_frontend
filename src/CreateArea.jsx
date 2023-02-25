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
  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await axios.post("http://localhost:5000/articles", {
      title: head,
      content: body,
    });
    //   .then(() => console.log("Article Created"))
    //   .catch((err) => {
    //     console.error(err);
    //   });

    console.log(response.data);
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
