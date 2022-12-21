import React from "react";
import PropTypes from "prop-types";

/**
 * A React component for displaying Pokemon images.
 * 
 * @param {number} id Id for Pokemon.
 * @param {string} name Pokemon name.
 */
const Image = ({ id, name }) => {
  const picUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/";
  const picUrl2 = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

  return <img alt={`A pokemon named ${name}`}
    src={`${picUrl}${id}.png`}
    
    // If first source doesn't work, switch to secondary source.
    onError={(e) => {
      if (e.target.src !== `${picUrl2}${id}.png`)
        e.target.src = `${picUrl2}${id}.png`;
    }}>
  </img>;
};

Image.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired
};

export default Image;
