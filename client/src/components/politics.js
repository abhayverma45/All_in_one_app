import React, { useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";

const Abhay = () => {
  const [quotes, setquotes] = useState([]);
  const [loading, setloading] = useState(false);
  const getquotes = async () => {
    const response = await axios.get("/api/quotes");
    if (response.data.success === true) {
      setquotes(response.data.data);
    }
  };
  const handleDelete = async (id) => {
    try {
      console.log(id);
      const response = await axios.delete(`/api/remove/${id}`);
      if (response.data.success === true) {
        alert("Deleted successfully!");
        setloading(!loading);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getquotes();
  }, [loading]);
  return (
    <>
      {quotes.map((e, i) => {
        return (
          <>
            <Card
              id={e._id}
              current={i}
              category_now={e.category}
              headline_now={e.headline}
              description_now={e.description}
              type_now={e.type}
              handleDelete={handleDelete}
            />
          </>
        );
      })}
    </>
  );
};
export default Abhay;
