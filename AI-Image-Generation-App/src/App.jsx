import { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [text, setText] = useState('');
  const [imgLink, setImgLink] = useState('');
  const [isGenerated, setIsGenerated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  async function fetchData() {
    const options = {
      method: 'POST',
      url: 'https://ai-image-generator14.p.rapidapi.com/',
      headers: {
        'x-rapidapi-key': '28f0d22157msha41414361cb81abp1eb3b8jsne3708e88567b',
        'x-rapidapi-host': 'ai-image-generator14.p.rapidapi.com',
        'Content-Type': 'application/json',
      },
      data: {
        jsonBody: {
          function_name: 'image_generator',
          type: 'image_generation',
          query: text, // Use user input for the query
          output_type: 'png',
        },
      },
    };

    try {
      setIsLoading(true);
      const response = await axios.request(options);
     // Debug response
      setImgLink(response.data.message.output_png); // Assume 'output_url' contains the image URL
      
      setIsGenerated(true);
    } catch (error) {
      console.error('Error fetching image:', error);
      setIsGenerated(false);
      alert('Failed to generate image. Please try again.');
    } finally {
      setIsLoading(false);
    }
  }

  const generateImage = () => {
    if (text.trim() === '') {
      alert('Please enter some text to generate an image.');
      return;
    }
    fetchData();
  };

  return (
    <>
      <h2>AI Image Generator</h2>
      <div className="input-container">
        <input
          id="search-text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="text-input"
          type="text"
          placeholder="Enter a prompt for image generation"
        />
        <button onClick={generateImage} className="submit-btn">
          Submit
        </button>
      </div>
      <div className="img-container">
        {isLoading ? (
          <div className="loader">
            <img
              className="loading"
              src="https://cdn.pixabay.com/animation/2023/11/09/03/05/03-05-45-320_512.gif"
              alt="Loading..."
            />
          </div>
        ) : isGenerated ? (
          <img className="generated-img" src={imgLink} alt="Generated" />
        ) : (
          <p>No image generated yet</p>
        )}
      </div>
    </>
  );
}

export default App;
