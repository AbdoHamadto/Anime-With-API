import { useState, useEffect } from "react";
import Bar from "./commponent/bar";
import Card from "./commponent/card";
import Alert from "./commponent/alert";

function App() {
  const [anime, setAnime] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const getData = async () => {
    // fetch data
    const data = await fetch("https://api.jikan.moe/v4/anime")
      .then((res) => res.json())
      .then((res) => res.data);

    setAnime(data.slice(1, data.length - 1));
  };

  useEffect(() => getData, []);

  const [alert, setAlert] = useState(false);
  const [numAnime, setNumAnime] = useState();

  const openAlert = (index, state) => {
    setNumAnime(index);
    setAlert(state);
  };

  const closeAlert = (state) => {
    setAlert(state);
  };

  const results = anime.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Bar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      {results.length > 0 ? (
        <div>
          {alert && (
            <Alert data={results} numAnime={numAnime} closeAlert={closeAlert} />
          )}
          <div className="container">
            <Card data={results} open={openAlert} />
          </div>
        </div>
      ) : (
        <p className="not-found">Anime not found</p>
      )}
    </>
  );
}

export default App;
