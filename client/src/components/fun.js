import React, { useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";

const Abhay = () => {
  const [jokes, setjokes] = useState([]);
  const [loading, setloading] = useState(false);
  const getjokes = async () => {
    const response = await axios.get("/api/jokes");
    if (response.data.success === true) {
      setjokes(response.data.data);
    }
  };
  const handleDelete = async (id) => {
    try {
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
    getjokes();
  }, [loading]);
  return (
    <>
      {jokes.map((e, id) => {
        return (
          <>
            <Card
              id={e._id}
              current={id}
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
