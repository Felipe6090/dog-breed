import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState
} from 'react'

import api from '@api/index'

interface IAuthProviderProps {
  children: React.ReactNode
}

interface ISignInProps {
  email: string
}

interface IAuthContextProps {
  signIn: ({ email }: ISignInProps) => Promise<void>
  signOut: () => Promise<void>
}

interface IUserProps {
  _id: string | null
  email: string
  token: string | null
  createdAt: string
  updatedAt: string
  __v: number
}

export const AuthContext = createContext<IAuthContextProps>(
  {} as IAuthContextProps
)

const AuthProvider: React.FC<IAuthProviderProps> = ({ children }) => {
  const tokenKey = '@dog_breed:token'

  const signIn = useCallback(async ({ email }: ISignInProps) => {
    await api
      .post('/register', { email })
      .then(res => {
        console.log(res.data?.user)
        localStorage.setItem(tokenKey, res.data?.user?.token)
      })
      .catch(err => {
        throw new Error(err)
      })
  }, [])

  const signOut = useCallback(async () => {
    localStorage.clear()
  }, [])

  // useEffect(() => {
  //   verifyStorage()
  // }, [])

  return (
    <AuthContext.Provider
      value={{
        signIn,
        signOut
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

const useAuth = () => useContext(AuthContext)

export { AuthProvider, useAuth }
