export interface ProfileData {
  name: string
  role: string
  bio: string
  image: string
  address: string
  links: {
    linkedin?: string
    github?: string
    twitter?: string
  }
}
