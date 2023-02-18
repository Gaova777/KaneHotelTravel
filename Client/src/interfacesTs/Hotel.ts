import Room from './Room'

type Hotel = {
  id?: string
  name: string,
  image: string,
  services: string,
  description?: string,
  categoria: string,
  city: string,
  rooms: Array<Room>
  rating?: number,
  category: string
}

export default Hotel;