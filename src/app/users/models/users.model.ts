export interface User {
  name: string
  id: number
  photos: {
    small: string
    large: string
  }
  followed: boolean
}

export interface UserResponse {
  items: User[]
  totalCount: number
}
