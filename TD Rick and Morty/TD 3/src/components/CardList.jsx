import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGhost, faPlus } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'


export default function CardList() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then((response) => response.json())
      .then((json) => {
        setCharacters(json.results);
        // console.log(json.results)
      });
  }, []);

  return (
    <div>
      {characters.length > 0 && (
        <ul>
          {characters.map((character) => (
            <li key={character.id} class="card__list">
              <img src={character.image} alt={character.name} />
              <div>
              {
                character.status == 'Dead' ? (
                  <FontAwesomeIcon icon={faGhost} />
                  ): null
                }
                    {character.name}
                </div>
              <div>{character.location.name}</div>
              <div class="character__button">
              <Link to="/">
                <button class="btn" type="submit">Détails
                {/* <FontAwesomeIcon icon={faPlus} /> */}
                </button>
              </Link>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

