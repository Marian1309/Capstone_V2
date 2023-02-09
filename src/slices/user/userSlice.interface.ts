export interface UserState {
  currentUser: {
    displayName: string
    email: string
    photoUrl: string
  } | null
}
