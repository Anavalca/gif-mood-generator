import React, {useState, useEffect} from 'react';
import './App.css'

const apiURL = 'https://api.giphy.com/v1/gifs/search?api_key=yZ0RG4RZhg0BTSjNfJsTlziziXLOt5gG&q=cat&limit=25&offset=0&rating=G&lang=en'

function App() {
  const [gifs, setGifs] = useState([])

  useEffect(function() {
    fetch(apiURL)
    .then(res => res.json())
    .then(response => {
      const {data} = response
      const gifs = data.map(image => image.images.downsized_medium.url)
      console.log(gifs)
      setGifs(gifs)
    })
  }, [])

  return (
    <div className="App">
      <section className="App-content">
        {gifs.map(singleGif => <img alt='gif' src={singleGif}/> )}
       
        <button onClick={() => setGifs()}>Cambiar gif</button>
    
      </section>
    </div>
  );
}

export default App;

// const GIFS = [
//   'https://media3.giphy.com/media/l46ChsgVfw08PbnZ6/giphy.gif'
// ]

// const GIFS2 = [
//   'https://media2.giphy.com/media/9rannlr3tRjxrQKzeZ/giphy.gif?cid=ecf05e4703789389e2c4678542e9b7ea8509031bf6d814af&rid=giphy.gif'
// ]

// function App() {
//   const [gifs, setGifs] = useState([GIFS])

//   useEffect(function() {

//   }, [])

//   return (
//     <div className="App">
//       <section className="App-content">
//         {gifs.map(singleGif => <img alt='gif' src={singleGif}/> )}
       
//         <button onClick={() => setGifs(GIFS2)}>Cambiar gif</button>
    
//       </section>
//     </div>
//   );
// }

// export default App;
