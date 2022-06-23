const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin%2C%20litecoin%2C%20ethereum%2C%20dogecoin&order=market_cap_desc&per_page=100&page=1&sparkline=false";

fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(data)
    })
    .catch((error) => console.log(error))
