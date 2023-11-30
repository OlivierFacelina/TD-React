import Card from '../Card/Card'
import './CardList.scss'

export default function CardList({data = []}) {
  return data.map(item => <Card key={item.id} character={item} />)
}
