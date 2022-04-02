import './ItemList.css';

const ItemList = (props) => {

  return <div>
  <div className="indLIst">
      <h3>{`Album ${props.num}`}</h3>
      <img src={props.URL} />
      </div>
      <div className='priceAndButton'>
      <label className='priceList' > {`$${props.price}`}</label>
      <button className='listButton' > ADD TO CART</button>
      </div>
      </div>
  
};

export default ItemList;
