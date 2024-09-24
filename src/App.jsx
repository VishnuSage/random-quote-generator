import React, { useState, useEffect } from 'react';
import { fetchQuotes } from '../api';
import QuoteCard from './QuoteCard';

const App = () => {
  const [quotes, setQuotes] = useState([]);
  const [currentQuote, setCurrentQuote] = useState({});

  // Map author names to image URLs
  const authorImages = {
    "Rumi": "https://t4.ftcdn.net/jpg/06/52/94/63/360_F_652946321_nX2ruSlctSPDFX852EHzJPNnjdHnMbjn.jpg",
    "Abdul Kalam": "https://wallpapercave.com/wp/wp6598952.jpg",
    "Bill Gates": "https://wallpapercave.com/wp/wp12612768.jpg",
    "Abu Bakr (R.A)": "https://wallpapercave.com/wp/wp11637586.jpg",
    "Albert Einstein": "https://wallpapercave.com/wp/wp9292784.jpg",
    "Abraham Lincoln": "https://wallpapercave.com/wp/AWAkVId.jpg",
    "Oprah Winfrey": "https://wallpapercave.com/wp/wp2363628.jpg",
    "Muhammad Ali": "https://wallpapercave.com/wp/wp2093480.jpg",
    "William Shakespeare": "https://wallpapercave.com/wp/wp2049597.jpg",
    "Mother Teresa": "https://wallpapercave.com/wp/wp7272622.jpg",
    "Nelson Mandela": "https://wallpapercave.com/wp/Tcun71t.jpg",
    "Umar ibn Al-Khattāb (R.A)": "https://c7.alamy.com/comp/FF9HMX/caliph-umar-nthe-entrance-of-caliph-umar-581-644-into-jerusalem-638-FF9HMX.jpg",
    "Walt Disney": "https://wallpapercave.com/wp/JMZDSzD.jpg",
    "Ali ibn Abi Talib (R.A)": "https://preview.redd.it/meet-the-first-imam-imam-ali-ibn-abi-talib-as-v0-fcrzr8b6d42c1.jpg?width=640&crop=smart&auto=webp&s=795561b77204ae836ffe821d6d14c74fc1c32f7b",
    "Aristotle": "https://wallpapercave.com/wp/wp4506801.jpg",
    // Add more authors and image URLs as needed
  };

  useEffect(() => {
    fetchQuotes().then(data => {
      setQuotes(data);
      getRandomQuote(data);
    });
  }, []);

  const getRandomQuote = (quotesArray) => {
    const randomIndex = Math.floor(Math.random() * quotesArray.length);
    const randomQuote = quotesArray[randomIndex];
    setCurrentQuote(randomQuote);
  };

  const handleRefresh = () => {
    getRandomQuote(quotes);
  };

  const handleTweet = () => {
    const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(`"${currentQuote.quote}" - ${currentQuote.author || 'Unknown'}`)}`;
    window.open(tweetUrl, '_blank');
  };

  return (
    <div 
      className="app"
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundImage: `url(${authorImages[currentQuote.author]})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
      }}
    >
      {currentQuote && (
        <QuoteCard
          quote={currentQuote.quote}
          author={currentQuote.author}
          onRefresh={handleRefresh}
          onTweet={handleTweet}
        />
      )}
    </div>
  );
};

export default App;
