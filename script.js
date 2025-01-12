const quote = document.querySelector(".displayQuote");
const author = document.querySelector(".author");
const btn = document.querySelector("button");

const url = "https://famous-quotes4.p.rapidapi.com/random?category=men&count=1";
const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "30bdc4013cmshc81f1372b8be894p199d70jsn1de6f94d8228",
    "x-rapidapi-host": "famous-quotes4.p.rapidapi.com",
  },
};

let getQuote = async () => {
  try {
    const response = await fetch(url, options);
    const data = await response.json();
    console.log(data);

    quote.textContent = `${data[0].text}`;
    author.textContent = `~By ${data[0].author}`;
  } catch (err) {
    console.log("failed to fetch quote currently", err);
    quote.textContent = `Oops! Could not fetch a new quote.`;
  }
};

btn.addEventListener("click", getQuote);
getQuote();
