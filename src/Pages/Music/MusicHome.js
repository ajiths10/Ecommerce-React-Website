import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import axios from "axios";
import "./MusicHome.css";

const MusicHome = () => {
  const [productsArr, setProductsArr] = useState([]);

  let num = 1;
  useEffect(() => {
    axios
      .get("http://localhost:4000/products")
      .then((res) => {
        console.log(res)
        setProductsArr(res.data.products)
  })
  }, []);

  return (
    <div className="mainBody">
      <div>
        <h2>MUSIC</h2>
      </div>
      <div className="musiclist">
        {productsArr.map((element) => {
          return (
            <ItemList
              id={element.id}
              title={element.title}
              price={element.price}
              URL={element.imageUrl}
              quantity={1}
              num={num++}
            />
          );
        })}
      </div>
    </div>
  );
};

export default MusicHome;
