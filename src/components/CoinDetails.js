import {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import './CoinDetails.css'
import ShowMoreText from 'react-show-more-text';
// import './Coin.css'

export default function CoinDetails() {
    const {coinId} = useParams()
    // const {coin, setCoinId} = useContext(CoinContext)
    // setCoinId(coinId)
    const [coin, setCoin] = useState({image:{}, market_data:{current_price:{}}, description:{}})
    const [isFetching, setIsFetching] = useState(false)

    useEffect(() => {
        setIsFetching(true)
        axios.get(`https://api.coingecko.com/api/v3/coins/${coinId}`)
            .then(res => {
                setIsFetching(false)
                setCoin(res.data)
            })
            .catch(err => {
                setIsFetching(false)
                console.log(err)
            })
    }, []);

    function CoinData() {
        return (
            <div className="coin-cont">
                <div className="coin-topline det-box">
                    <img src={coin.image.large} alt={coin.name} className="coin-image" />
                    <h1 className="coin-name">{coin.name}</h1>
                    <p className="coin-ticker">{coin.symbol}</p>
                    <p className="coin-current">AUD$ {coin.market_data.current_price.aud}</p>
                </div>
                <div className="coin-chatter det-box">
                    socials
                </div>
                <div className="coin-chart det-box">
                    chart
                </div>
                <div className="coin-detail det-box">
                    <h4>Description:</h4>
                    {/* <p className="coin-description">{coin.description.en}</p> */}
                    <ShowMoreText 
                                    lines={3}
                                    more='Show more'
                                    less='Show less'
                                    className='content-css'
                                    anchorClass='my-anchor-css-class'
                                    // onClick={this.executeOnClick}
                                    expanded={false}
                                    width={900}
                    >
                        {coin.description.en}
                    </ShowMoreText>
                </div>
            </div>
        )
    }

    return (
        <div className="coin-details-page">
            {isFetching ? <div>loading...</div> : <CoinData />}
        </div>
    )
}