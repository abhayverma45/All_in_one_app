import React, { useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";
const Abhay = () => {
  const [news, setnews] = useState([]);
  const [loading, setloading] = useState(false);
  const getnews = async () => {
    const response = await axios.get("/api/news");
    if (response.data.success === true) {
      setnews(response.data.data);
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
    getnews();
  }, [loading]);

  return (
    <>
      {news.map((e, i) => {
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
