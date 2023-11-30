import './Card.scss'
import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCross } from '@fortawesome/free-solid-svg-icons'

export default function Card({character}) {
  return (
    <div className='card'>
        <div className="card__img">
            <img src={character.image} alt={character.name} />
        </div>
        <div className="card__content">
            <h3 className="card__title">{character.name}</h3>
            <p className="card__text card__text--muted">
                {character.location.name}
            </p>
            { character.status === 'Dead' &&
              <p>
                <FontAwesomeIcon icon={faCross} />
              </p>
            }
            <Link to={`details/${character.id}`}>Voir détails</Link>
        </div>
    </div>
  )
}
