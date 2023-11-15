function App() {
  return (
    <div id="quote-box">
      <div className="quote-text">
        <i className="fa fa-quote-left"></i>
        <span id="text">Hello World!</span>
      </div>
      <div id="author">- Author</div>
      <button id="new-quote">New Quote</button>
      <a id="tweet-quote" href="https://twitter.com/intent/tweet" target="_blank" rel="noreferrer">
        Tweet Quote
      </a>
    </div>
  );
}

export default App;
