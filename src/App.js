import "./App.css";
import { useEffect, useState } from "react";

function App() {
	const [quote, setQuote] = useState();

	const getQuote = async () => {
		const data = await fetch("https://api.quotable.io/random");
		const quote = await data.json();
		setQuote(quote);
	};

	useEffect(() => {
		getQuote();
	}, []);

	return (
		<div className="App">
			<div id="quote-box">
				<p id="text">{quote && quote.content}</p>
				<p id="author">{quote && quote.author}</p>
				<button
					id="new-quote"
					onClick={() => {
						getQuote();
					}}
				>
					New quote
				</button>
				<a id="tweet-quote" href="https://twitter.com/intent/tweet">twitter</a>
			</div>
		</div>
	);
}

export default App;
