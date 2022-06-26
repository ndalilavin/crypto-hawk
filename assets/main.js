const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin%2C%20litecoin%2C%20ethereum%2C%20dogecoin&order=market_cap_desc&per_page=100&page=1&sparkline=false";

async function getCoin(number_of_coins, page, id) {

    var doc = document.getElementById(id)
    doc.innerHTML = "<h2>Loading...please wait<h2>"

        // Fetching data from the Coin gecko API and storig it in a variable
        const data = await fetch( `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${number_of_coins}&page=${page}&sparkline=false` , {
            "headers": {
                "accept": "application/json, text/plain, */*",
                "accept-language": "en-US,en;q=0.9",
                "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"101\", \"Google Chrome\";v=\"101\"",
                "sec-ch-ua-mobile": "?0",
                "sec-ch-ua-platform": "\"Linux\"",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "cross-site"            
            },
            "referrer": "http://localhost:3000/",
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": null,
            "method": "GET",
            "mode": "cors",
            "credentials": "omit"
            }).then((k)=>k.json());


            // Display fetched cryptocurrency data on homescreen
            const empty_list = []
            for(const d in data) {
                var data1 = ` 
                <div id="id1" onClick="callEvent(this)" class="coin ">
                    <img src="${data[d].image}" style="width:100px;" >
                    <div >
                        <h3 >$${data[d].current_price}</h3>
                        <p > ${data[d].name}</p>
                    </div>
                </div>`

                empty_list.push(data1)
            } 
            
            doc.innerHTML = empty_list;

        }

        //calls the function to display coins on the homepage
        getCoin(6,1, "coin-list-holder")


        // Adding the like/favorite functionality
function callEvent(event) {
    event.classList.toggle("active")

    const loc = localStorage.getItem("clicked")
    if(loc !== null) {
        const new_count = parseInt(loc) + 1
        localStorage.setItem("clicked", new_count)
    }else{
        localStorage.setItem("clicked",1)
    }

    const loc2 = localStorage.getItem("clicked")
    var d = document.getElementById("clicked")
    d.innerHTML = `You have liked ${loc2} currencies`
}





