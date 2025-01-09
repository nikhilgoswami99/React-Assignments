import { useEffect, useState } from 'react'
import axios from 'axios';
import './App.css'

function App() {
let [text, setText] = useState("");
let [imgLink, setImgLink] = useState("");
let [isGenerated, setIsGenerated] = useState(null);


async function fetchData() {
  const options = {
    method: 'POST',
    url: 'https://chatgpt-42.p.rapidapi.com/texttoimage3',
    headers: {
      'x-rapidapi-key': '41ef75cbcamsh58da2adee279124p18cba7jsn021699ab6e69',
      'x-rapidapi-host': 'chatgpt-42.p.rapidapi.com',
      'Content-Type': 'application/json'
    },
    data: {
      text: `${text}`,
      width: 512,
      height: 512
    }
  };
  
  try {
    const response = await axios.request(options);
    setImgLink(response.data.generated_image);
    
  } catch (error) {
    console.error(error);
  } finally{
    setIsGenerated(false);
  }
}

const generateImage = () =>
{
  fetchData();
  setIsGenerated(true);
}

  return (
    <>
      <h2>Image Generation App</h2>
      <div className="input-container">
        <input id='search-text' onChange={(e) =>{
          setText(e.target.value)
        }} className="text-input" type="text" />
        <button onClick={generateImage} className="submit-btn">Submit</button>
      </div>
      <div className="img-container">
        {
          isGenerated ? <div className='loader'>
          <img className='loading' src="https://cdn.pixabay.com/animation/2023/11/09/03/05/03-05-45-320_512.gif" alt="" />
          </div> : <img className='generated-img' src={imgLink} alt="" />
        }
        
      </div>
    </>
  );
}

export default App
