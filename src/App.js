import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card/Card";
import { getAllPokemon, getPokemon } from "./components/utils/pokemon";

function App() {
  const [pokemonData, setPokemonData] = useState([]);
  const [nextURL, setNextURL] = useState("");
  const [prevURL, setPrevURL] = useState("");
  const [loading, setLoading] = useState(true);
  const initialURL = "https://pokeapi.co/api/v2/pokemon";

  useEffect(() => {
    const fetchData = async () => {
      //全てのポケモンデータを取得
      let res = await getAllPokemon(initialURL);
      setNextURL(fetchData.next);
      setPrevURL(fetchData.previaus);
      //ポケモンデータの配列を利用して各ポケモンの詳細データをフェッチする．
      await loadPokemon(res.results);
      // console.log(res.results);
      setLoading(false);
    };
    fetchData();
  }, []);

  //dataにはポケモンのnameとurlが入ってる。urlをフェッチすればより詳細なポケモンデータが分かる。
  const loadPokemon = async (data) => {
    //各ポケモンデータをフェッチするまで待った上で_pokemonData変数に結果を返す。それがPromise.allである。
    let _pokemonData = await Promise.all(
      data.map(async (pokemon) => {
        let pokemonRecord = await getPokemon(pokemon.url);
        return pokemonRecord;
      })
    );
    // console.log(_pokemonData);
    setPokemonData(_pokemonData);
  };

  console.log(pokemonData);

  return (
    <div className="App">
      {loading ? (
        <h1>ロード中・・・</h1>
      ) : (
        <>
          {/* <h1>ポケモンデータを取得しました</h1> */}
          <div className="grid-container">
            {pokemonData.map((pokemon, i) => {
              return <Card key={i} pokemon={pokemon} />;
            })}
          </div>
        </>
      )}
    </div>
  );
}

export default App;
