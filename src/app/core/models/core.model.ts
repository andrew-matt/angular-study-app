export interface MeResponse {
  data: {
    id: number
    login: string
    email: string
  }
  message: string[]
  fieldErrors: string[]
  resultCode: number
}
