import './Header.css';

const Header = (props) => {
    return(
        <div className='header'>
            <div>
            <label> Home</label>
            <label> Store</label>
            <label> About</label>
            </div>
            <button className='cart-button' onClick={props.onClick} >Cart</button>
        </div>
    )
};

export default Header