import React, { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  // const [rephrasedTweet, setRephrasedTweet] = useState("");
  // const [fetchError, setFetchError] = useState("");

  // async function fetchTechNews() {
  //   try {
  //     // Clear previous state
  //     setRephrasedTweet("");
  //     setFetchError("");

  //     // Fetch articles from the news API
  //     const response = await axios.get(`https://newsapi.org/v2/everything`, {
  //       params: {
  //         q: "CryptoCurrency",
  //         language: "en",
  //         sortBy: "publishedAt",
  //         apiKey: process.env.REACT_APP_NEWS_API_KEY, // Correct env variable usage
  //       },
  //     });
  //     const articles = response.data.articles;

  //     if (articles.length) {
  //       const firstArticle = articles[0];
  //       console.log(`First Article: ${firstArticle.title} - ${firstArticle.url}`);
        
  //       // Generate a rephrased tweet
  //       const rephrasedContent = await rephraseWithGoogleBard(
  //         firstArticle.title,
  //         firstArticle.url
  //       );
  //       setRephrasedTweet(rephrasedContent);
  //       console.log(`Rephrased Content: ${rephrasedContent}`);
  //     } else {
  //       setFetchError("No articles found.");
  //     }
  //   } catch (error) {
  //     console.error("Error fetching news:", error.message);
  //     setFetchError("Error fetching news. Please try again later.");
  //   }
  // }

  // async function rephraseWithGoogleBard(title, url) {
  //   try {
  //     const response = await axios.post(
  //       `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${process.env.REACT_APP_BARD_API_KEY}`,
  //       {
  //         contents: [
  //           {
  //             parts: [
  //               {
  //                 text: `Generate a concise and engaging tweet for X.com under 279 characters based on the news title: ${title}. Use the reference URL: ${url} to gather more information. Include relevant hashtags, emojis, and avoid posting any reference links in the tweet. Keep the tone aligned with the topic`,
  //               },
  //             ],
  //           },
  //         ],
  //       },
  //       {
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //       }
  //     );

  //     const rephrasedText =
  //       response.data?.candidates?.[0]?.content?.parts?.[0]?.text;

  //     return rephrasedText || `${title} - ${url}`;
  //   } catch (error) {
  //     console.error("Error rephrasing content:", error.message);
  //     return "Unable to rephrase content. Try again later.";
  //   }
  // }

  const handlePost = async () => {
    try {
      const response = await axios.post('https://twitterbot-hfmn.onrender.com/api/fetch-and-post-news');
      console.log('Response:', response.data);
    } catch (error) {
      console.error('Error making the POST request:', error);
    }
  };

  return (
    <div className="App">
      {/* <h1>Tech News Fetcher</h1>
      <button onClick={fetchTechNews}>Fetch Tech News</button>
      <div className="result">
        {rephrasedTweet && (
          <div>
            <h3>Rephrased Tweet:</h3>
            <p>{rephrasedTweet}</p>
          </div>
        )}
        {fetchError && <p style={{ color: "red" }}>{fetchError}</p>}
      </div> */}
just for fun
<button onClick={handlePost}>post</button>
    </div>
  );
}

export default App;
