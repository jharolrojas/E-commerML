import axios from "axios";
import React, { useEffect, useState } from "react";

const useGetData = () => {
  const [data, setData] = useState([]);
  const [dataAll, setDataAll] = useState([]);
  const [filterPoke, setFilterPoke] = useState({});

  //for login pokemon
  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon")
      .then((res) => setData(res.data.results));
  }, []);
  //for home list
  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/?limit=1154")
      .then((res) => setDataAll(res.data.results));
  }, []);
  //filtrar porpokemon sea name o id
  const filterPokemon = (search) => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${search}`).then((res) => {
      setFilterPoke(res.data);
    });
  };
  //filter for type
  const filterType = (url) => {
    axios(url)
      .then((res) => setDataAll(res.data.pokemon))
      .catch((err) => console.log(err));
  };

  // para traer todos los pokemones desde el select
  const allPokemons = () => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon")
      .then((res) => setDataAll(res.data.results));
  };

  return { data, dataAll, filterPokemon, filterPoke, filterType, allPokemons };
};

export default useGetData;
