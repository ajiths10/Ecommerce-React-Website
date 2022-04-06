import ItemList from "./ItemList";
import "./MusicHome.css";

const MusicHome = () => {
  let productsArr = [
    {
      id: 1,
      title: "Colors",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
        quantity: 1,
    },

    { id:2,
      title: "Black and white Colors",
      price: 50,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
      quantity: 1,
    },

    {
      id: 3,
      title: "Yellow and Black Colors",
      price: 70,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
        quantity: 1,
    },

    {
      id:4,
      title: "Blue Color",
      price: 102,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
        quantity: 1,
    },
  ];
  let num = 1;
  const itemList = productsArr.map((element) => {
    return (
      
        <ItemList
          id={element.id}
          title={element.title}
          price={element.price}
          URL={element.imageUrl}
          quantity={element.quantity}
          num={num++}
        />
      
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
