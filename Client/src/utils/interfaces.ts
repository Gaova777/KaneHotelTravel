export interface Record {
  error?: string,
  response?: object,
  registered?: boolean
}

export interface Activity {
  name: string,
  description: string,
  duration: number,
  price: number,
  image: string
}

export interface City {
  name: string,
  image: string,
  popularity?: number
}

export interface Room {
  id?: number
  name: string,
  price: number,
  description: string,
  image: string
}

export interface Hotel {
  id?: string
  name: string,
  image: string,
  services: string,
  description?: string,
  category: string,
  city: string,
  rooms: Array<Room>
  rating?: number
}