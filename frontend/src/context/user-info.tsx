import {
  createContext,
  Dispatch,
  useContext,
  useEffect,
  useReducer,
} from "react"
import { getUserData } from "../asyncs/login"
import { UserState, UserStateAction } from "../types/Login"
import { contextReducer } from "./reducer"

const initialState = { loading: true }

export const UserContext = createContext<UserState>(initialState)
export const UserDispatchContext =
  createContext<Dispatch<UserStateAction>>(null)

export const UserInfoProvider = ({
  children,
  userContext,
}: {
  children: React.ReactNode
  userContext?: UserState
}) => {
  const [user, dispatch] = useReducer(
    contextReducer,
    userContext ?? initialState,
  )

  // Fetch the user data only the first time the provider is created
  // This works thanks to Next.js Link components, as soon as a new
  // session is created this will re-fetch
  useEffect(() => {
    getUserData(dispatch)
  }, [])

  return (
    <UserContext.Provider value={user}>
      <UserDispatchContext.Provider value={dispatch}>
        {children}
      </UserDispatchContext.Provider>
    </UserContext.Provider>
  )
}

// Custom hooks to use the contexts make code cleaner elsewhere
export function useUserContext() {
  return useContext(UserContext)
}
export function useUserDispatch() {
  return useContext(UserDispatchContext)
}
