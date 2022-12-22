import React from "react"
import errorPic from "../images/notFound96.png"

/**
 * A React component for displaying Pokemon images.
 * 
 * @param {number} id Id for Pokemon.
 * @param {string} name Pokemon name.
 */
const Image = ({ id, name, small }) => {
  const picUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/"
  const picUrl2 = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"

  const sourceLarge = `${picUrl}${id}.png`
  const sourceSmall = `${picUrl2}${id}.png`

  return id && name ? 
    <img alt={`A pokemon named ${name}`}
      src = {small ? sourceSmall : sourceLarge}

      // If first source doesn't work, switch to secondary source.
      onError={(e) => {
        if (e.target.src === sourceLarge || e.target.src === sourceSmall) {
          e.target.src = errorPic
        }
      }}>
    </img>
    :
    <p>loading...</p>
}

export default Image
