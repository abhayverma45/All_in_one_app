import React, { useState } from "react";
import axios from "axios";

const Form = () => {
  const [type, settype] = useState("");
  const [category, setcategory] = useState("");
  const [headline, setheadline] = useState("");
  const [description, setdescription] = useState("");

  // to store what is written in input boxes we use two attributes
  //1. value={state}
  //2. onChange=(e)=>setstate(e.target.value)}

  const handlesubmit = async () => {
    try {
      console.log("yes entered");
      const response = await axios.post("/api/save", {
        type,
        category,
        headline,
        description,
      });

      if (response.data.success) {
        alert("Content successfully saved");
      }
    } catch (error) {
      console.log(error);
      alert(error);
    }
  };

  return (
    <>
      <form>
        <div class="form-group">
          <label for="exampleFormControlSelect1">Content type</label>
          <select
            value={type}
            onChange={(e) => settype(e.target.value)}
            class="form-control"
            id="exampleFormControlSelect1"
          >
            <option value=""> Select Content type </option>
            <option value="news">Recent News </option>
            <option value="jokes">Funny Jokes</option>
            <option value="quotes">Motivational quotes</option>
          </select>
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">Category</label>
          <input
            value={category}
            onChange={(e) => setcategory(e.target.value)}
            type="email"
            class="form-control"
            placeholder="Enter category"
          />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Headline</label>
          <input
            value={headline}
            onChange={(e) => setheadline(e.target.value)}
            type="text"
            class="form-control"
            placeholder="Enter title"
          />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Description</label>
          <textarea
            value={description}
            onChange={(e) => setdescription(e.target.value)}
            type="text"
            class="form-control"
            placeholder="Enter description"
          />
        </div>

        <button
          onClick={() => handlesubmit()}
          type="button"
          class="btn mt-2 btn-primary"
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default Form;
