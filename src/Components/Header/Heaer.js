import './Header.css';

const Header = () => {
    return(
        <div className='header'>
            <div>
            <label> Home</label>
            <label> Store</label>
            <label> About</label>
            </div>
            <button className='cart-button' >Cart</button>
        </div>
    )
};

export default Header