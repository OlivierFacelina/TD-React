import './Details.scss'
import { URL } from '../../constants/api'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Episode from '../../components/Episode'

export default function Details() {
  const [character, setCharacter] = useState(null)
  const [loading, setLoading] = useState(true)

  const {id} = useParams();
  const fetchApi = async () => {
    try {
        const response = await fetch(`${URL}/${id}`)
        const result = await response.json()
        setCharacter(result)
    } catch (e) {
        console.log(e.message)
    } finally {
        setLoading(false)
    }
  }

  useEffect(() => {
    fetchApi()
  }, [id])

  return (
    loading ? <p>Chargement en cours...</p> : 
    <div className='detail-page'>
      <div className="detail__img">
        <img src={character.image} alt={character.name} />
      </div>
      <div className="detail__content">
        <h3>{character.name}</h3>
        <p>{character.location.name}</p>
      </div>
      <Episode links={character.episode} />
    </div>
  )
}
