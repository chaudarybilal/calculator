import React from "react";
import "./Gifff.css";
import { FaCheckSquare } from "react-icons/fa";
import { useState, useEffect } from "react";

const Gifff = () => {
  const [search, setSearch] = useState("");
  const [gifs, setGifs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [offset, setOffset] = useState(100);

  const lmt = 10;
  const apikey = "G67CqXGOL4aPuxBdHv4P1d7PGXc4RTNy";
  var search_url =
    "https://api.giphy.com/v1/gifs/search?q=" +
    search +
    "&key=" +
    apikey +
    "&limit=" +
    lmt +
    "&offset=" +
    offset;

  const onClickhandler = () => {
    console.log("search_url", search_url);

    if (search.length > 0) {
      setLoading(true);

      fetch(search_url)
        .then((response) => {
          setLoading(false);
          return response.json();
        })

        .then((res) => {
          console.log("res", res);

          setGifs([...gifs, ...res.data]);
        })
        .catch((e) => {
          console.log("error", e);
          setLoading(false);
        });
    }
  };

  const handleInfinteScroll = async () => {
    console.log("scrollHight" + document.documentElement.scrollHeight);
    console.log("innerHeight" + window.innerHeight);
    console.log("scrollTop" + document.documentElement.scrollTop);
    try {
      if (
        window.innerHeight +
        document.documentElement.scrollHeight +
        document.documentElement.scrollTop
      ) {
        setOffset((prev) => prev + 10);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    onClickhandler();
  }, [offset]);
  useEffect(() => {
    window.addEventListener("scroll", handleInfinteScroll);
  }, []);
  return (
    <>
      <div className="title">
        <h1>giphy search engine</h1>
      </div>
      <div className="header">
        <div className="search-bar">
          <input
            type="text"
            placeholder="ENTER TEXT HERE"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <button className="btn" onClick={onClickhandler}>
          SEARCH HERE
        </button>
      </div>
      <div className="result">
        {loading ? (
          <div className="loading">
            <div className="loader"></div>
          </div>
        ) : (
          <div className="list">
            {gifs.map((gif, index) => {
              return (
                <div key={index} id={index} className="gif-sec">
                  <div className="add">
                    <img
                      width="10px"
                      height="200px"
                      src={gif.images.downsized?.url}
                      alt=""
                    />
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
};

export default Gifff;
