import './Home.css';

const Home = () => {
    return <div>
        <div className='homeHeader'>
            <button className='LatestBtn'> Get our Latest Album </button>
            <button className='palyBtn'>►</button>
        </div>
        <div className='homeBody' >
            <h2 className='homeBodyh2' >TOURS</h2>
            <div className='itemList'>
                <span className='itemDate'>JUL16 </span>
                <span class="itemPlace">DETROIT, MI</span>
                <span class="itemName">DTE ENERGY MUSIC THEATRE</span>
                <button class="buyBtn">BUY TICKETS</button>
            </div>
            <div className='itemList'>
                <span className='itemDate'>JUL19 </span>
                <span class="itemPlace">TORONTO,ON</span>
                <span class="itemName">BUDWEISER STAGE</span>
                <button class="buyBtn">BUY TICKETS</button>
            </div>
            <div className='itemList'>
                <span className='itemDate'>JUL22 </span>
                <span class="itemPlace">BRISTOW, VA</span>
                <span class="itemName">JIGGY LUBE LIVE</span>
                <button class="buyBtn">BUY TICKETS</button>
            </div>
            <div className='itemList'>
                <span className='itemDate'>JUL29 </span>
                <span class="itemPlace">PHOENIX, AZ</span>
                <span class="itemName">AK-CHIN PAVILION</span>
                <button class="buyBtn">BUY TICKETS</button>
            </div>
            <div className='itemList'>
                <span className='itemDate'>AUG 2 </span>
                <span class="itemPlace">LAS VEGAS, NV</span>
                <span class="itemName">T-MOBILE ARENA</span>
                <button class="buyBtn">BUY TICKETS</button>
            </div>
            <div className='itemList'>
                <span className='itemDate'>AUG 7 </span>
                <span class="itemPlace">CONCORD, CA</span>
                <span class="itemName">CONCORD PAVILION</span>
                <button class="buyBtn">BUY TICKETS</button>
            </div>
        </div>
    </div>
}

export default Home;