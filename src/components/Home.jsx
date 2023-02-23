import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import CardComponent from "./CardComponent";

const Home = () => {
  const [card, setCard] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  const getCardData = async () => {
    const res = await fetch(
      `https://randomuser.me/api/?results=20`
    
    );
    const data = await res.json();
    const finalData = data.results
  
    setCard((prev) => [...prev, ...finalData]);
    setLoading(false);
  };

  useEffect(() => {
    getCardData();
  }, [page]);

  const handelInfiniteScroll = async () => {
   
    try {
      if (
        window.innerHeight + document.documentElement.scrollTop + 1 >=
        document.documentElement.scrollHeight
      ) {
        setLoading(true);
        setPage((prev) => prev + 1);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handelInfiniteScroll);
    return () => window.removeEventListener("scroll", handelInfiniteScroll);
  }, []);

  return (
    <>
      <CardComponent cardInfo={card} />
      {loading && <Loading />}
    </>
  );
};

export default Home;