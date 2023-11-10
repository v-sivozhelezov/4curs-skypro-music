import { useParams } from 'react-router-dom'

export default function FavoritesPage() {
  const params = useParams()
  return <h1>{`Подборка ${params.id}`}</h1>
}
