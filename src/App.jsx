import { useState, useEffect } from 'react';
import Bar from "./commponent/bar"
import Card from "./commponent/card"
import Alert from './commponent/alert';

function App() {
  
  const [anime, setAnime] = useState([]);
  const [searchAnime, setSearchAnime] = useState([])
  const GetData = async () => {
    // fetch data
    const data = await fetch("https://api.jikan.moe/v4/anime")
      .then(res => res.json())
      .then(res => res.data)
      .catch(() => Error("Error 404"));

      setAnime(data.slice(1, data.length - 1))
      setSearchAnime(anime)
  }
  useEffect(() => GetData, []);

  const [alert, setAlert] = useState(false)
  const [numAnime, setNumAnime] = useState()
  const openAlert = (index, state) => {
    setNumAnime(index)
    setAlert(state)
  }
  const closeAlert = (state) => {
    setAlert(state)
  }
  
  const onSearch = (word) => {
    if (word !== "" && word !== undefined) {
      const filter =  searchAnime.filter((item) => item.title === word)
      if (filter.length > 0) {
        setAnime(filter)
      } else {
        setAnime(searchAnime)
      }
    } else { 
      setAnime(searchAnime)
    }
  }

  return(
    <>
    {anime.length > 0 ? 
      <div>
        {alert ? <Alert data={anime} numAnime={numAnime} closeAlert={closeAlert} /> : ""}
        <Bar search={onSearch} />
        <div className="container">
          <Card data={anime} open={openAlert} />
        </div>
      </div>
      : 
      <div>
        <Bar search={onSearch} />
        <p className="not-found">Not Found Anime</p>
      </div>
      }
    </> 
  )
}

export default App
