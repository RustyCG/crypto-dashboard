import React, { useState, useEffect, createContext } from 'react'
import axios from 'axios'

export const CoinContext = createContext()
export function CoinProvider(props) {
    const [coins, setCoins] = useState([])
    // const [coinID, setCoinID] = useState('')
    const [search, setSearch] = useState('')
    // const [isFetching, setIsFetching] = useState(false)

    useEffect(() => {
        // setIsFetching(true)
        axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=AUD&order=market_cap_desc&per_page=100&page=1&sparkline=false')
            .then(res => {
                // setIsFetching(false)
                setCoins(res.data)
            })
            .catch(err => {
                // setIsFetching(false)
                console.log(err)
            })
    }, []);

    return <CoinContext.Provider value=
        {{
            coins,
            search,
            setSearch,
        }}>
        {props.children}
    </CoinContext.Provider>
}