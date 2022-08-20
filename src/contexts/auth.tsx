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
  token: string | null
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
  const [token, setToken] = useState<string | null>(null)

  const tokenKey = '@dog_breed:token'

  const signIn = useCallback(async ({ email }: ISignInProps) => {
    await api
      .post('/register', { email })
      .then(res => {
        setToken(res.data?.user?._id)
        localStorage.setItem(tokenKey, res.data?.user?._id)
      })
      .catch(err => {
        throw new Error(err)
      })
  }, [])

  const signOut = useCallback(async () => {
    setToken(null)
    localStorage.clear()
  }, [])

  async function verifyStorage() {
    const storageToken = localStorage.getItem(tokenKey)

    setToken(storageToken)
  }

  useEffect(() => {
    verifyStorage()
  }, [])

  return (
    <AuthContext.Provider
      value={{
        token,
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
