import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import axios from "axios";
import "./MusicHome.css";

const MusicHome = () => {
  const [productsArr, setProductsArr] = useState([]);

const getProducts = async(value) => {
  try{
    const res = await axios.get(`http://localhost:4000?page=${value}`)
      console.log(res);
      setProductsArr(res.data);
  }
  catch(err){console.log(err)};
}
  let num = 1;
  useEffect(() => {
    getProducts(1);
  }, []);

  const nextProducts = () => {
    getProducts(productsArr.nextPage)
  }
  const previousProducts = () => {
    getProducts(productsArr.previousPage)

  }
  return (
    <div className="mainBody">
      <div>
        <h2>MUSIC</h2>
      </div>
      <div className="musiclist">
        {productsArr?.products?.rows?.map((element) => {
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
      <div>
        <button onClick={previousProducts}> {'<'} </button>
        <button>{productsArr.currentPage}</button>
        <button onClick={nextProducts}> {'>'} </button>
      </div>
    </div>
  );
};

export default MusicHome;
