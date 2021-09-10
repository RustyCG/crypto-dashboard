import { useContext } from 'react'
import { CoinContext } from '../CoinContext'
import CoinList from './CoinList.js'
// import './Coin.css'
import './List.css'

export default function List() {
    const {coins, search} = useContext(CoinContext)
    const filteredCoins = coins.filter(coin => coin.name.toLowerCase().includes(search.toLowerCase()))
    return (
        <div className="list-container">
            {filteredCoins.map((coin, idx) =>
                <CoinList
                    key={coin.id}
                    idx={idx}
                    id={coin.id}
                    name={coin.name}
                    image={coin.image}
                    symbol={coin.symbol}
                    volume={coin.total_volume}
                    price={coin.current_price}
                    priceChange={coin.price_change_percentage_24h}
                    marketCap={coin.market_cap}
                />
                )
            }
        </div>
    )
}