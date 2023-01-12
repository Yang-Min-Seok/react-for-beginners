import { useEffect, useState } from "react";

function App() {
  
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [money, setMoney] = useState(0);
  const [coinPrice, setCoinPrice] = useState(0);
  const [coinName, setCoinName] = useState("");

  // calling Api (only once)
  useEffect(() => {
    // How to call Api by address
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);
  
  function onChange (event) {
    setMoney(event.target.value);
  }

  function getPriceAndName (event) {
    const idx = event.target.selectedIndex;
    setCoinPrice(coins[idx].quotes.USD.price);
    setCoinName(coins[idx].id);
  }

  return (
    <div>
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      {loading ? <strong> Loading... </strong> : (
      <select
      onChange={getPriceAndName}
      >
        {coins.map((coin) => (
        <option>
          {coin.name} ({coin.symbol}) : {coin.quotes.USD.price} USD 
        </option>
        ))}
      </select>)}
      <input 
        type="number"
        value={money}
        onChange={onChange}
      >
      </input>
      <p> {money && coinPrice ? `U can buy ${Math.round(money / coinPrice)} coins of ${coinName}` : "Please select the coin you want to buy and the budget"} </p>
    </div>
  )
}

export default App;