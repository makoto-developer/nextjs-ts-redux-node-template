export type User = {
  id: number
  name: string
  age: number
  profile: string
  avatar: string
  role: 'Admin' | 'User' | string
}

export type Users = Array<User>
export const UserRole = {
  ADMIN: 'Admin',
  USER: 'User'
} as const

export function toUserObject(user: Record<keyof User, string>): User {
  return {
    id: parseInt(user.id),
    name: user.name,
    age: parseInt(user.age),
    profile: user.profile,
    avatar: user.avatar,
    role: user.role
  }

}
