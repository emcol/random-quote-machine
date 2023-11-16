import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { faXTwitter, faTumblr } from '@fortawesome/free-brands-svg-icons';
import quotes from './quotes';

function App() {
  const [quote, setQuote] = React.useState(quotes[0]);
  const [isVisible, setIsVisible] = React.useState(true);

  const getRandomQuote = () => {
    return quotes[Math.floor(Math.random() * quotes.length)];
  };

  const handleQuoteChange = () => {
    setIsVisible(false);
    setTimeout(() => {
      setQuote(getRandomQuote());
      setIsVisible(true);
    }, 500);
  };

  return (
    <div id="quote-app" style={{ backgroundColor: `${quote.color}` }}>
      <div id="quote-box" style={{ color: `${quote.color}` }}>
        <div className="quote-text" style={{ opacity: isVisible ? 1 : 0 }}>
          <FontAwesomeIcon icon={faQuoteLeft} size="lg" style={{ marginRight: '.4em' }} />
          <span id="text">{quote.text}</span>
        </div>
        <div className="quote-author" style={{ opacity: isVisible ? 1 : 0 }}>
          <span id="author">- {quote.author}</span>
        </div>
        <div className="buttons">
          <a
            id="tweet-quote"
            className="button"
            style={{ backgroundColor: `${quote.color}` }}
            target="_blank"
            href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(quote.text)}&hashtags=quotes,${encodeURIComponent(quote.author)}`}
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faXTwitter} />
          </a>
          <a
            id="tumblr-quote"
            className="button"
            style={{ backgroundColor: `${quote.color}` }}
            target="_blank"
            href={`https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,${encodeURIComponent(quote.author)}&caption=${encodeURIComponent(quote.author)}&content=${encodeURIComponent(
              quote.text
            )}&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button`}
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faTumblr} />
          </a>
          <button type="button" className="button" id="new-quote" onClick={handleQuoteChange} style={{ backgroundColor: `${quote.color}` }}>
            New Quote
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
