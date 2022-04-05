import { Link } from "react-router-dom";

import ItemList from "./ItemList";
import "./MusicHome.css";

const MusicHome = () => {
  const productsArr = [
    {
      title: "Colors",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },

    {
      title: "Black and white Colors",
      price: 50,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    },

    {
      title: "Yellow and Black Colors",
      price: 70,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    },

    {
      title: "Blue Color",
      price: 102,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    },
  ];
  let num = 1;
  const itemList = productsArr.map((element) => {
    return (
      <Link to="./Store/p1">
        <ItemList
          title={element.title}
          price={element.price}
          URL={element.imageUrl}
          num={num++}
        />
      </Link>
    );
  });

  return (
    <div className="mainBody">
      <div>
        <h2>MUSIC</h2>
      </div>
      <div className="musiclist">{itemList}</div>
    </div>
  );
};

export default MusicHome;
