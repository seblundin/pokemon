import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Image from "./Image";

const Pokemon = ({ url }) => {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(pokemon => setData(pokemon));
  }, []);

  if (data.stats) {
    return <>
      <h1>{data.name}</h1>
      <h2>HP: {data.stats[0].base_stat}</h2>
      <Image id={data.id} name={data.name}/>
    </>;
  }
  return <p>loading...</p>;
};

Pokemon.propTypes = {
  url: PropTypes.string.isRequired
};

export default Pokemon;
