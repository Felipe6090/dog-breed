import { useAuth } from '@contexts/auth'
import { Navigate, Outlet, useLocation } from 'react-router-dom'

export default function RequireAuth() {
  const tokenKey = '@dog_breed:token'

  const token = localStorage.getItem(tokenKey)

  const location = useLocation()

  console.log(token)

  return token ? (
    <Outlet />
  ) : (
    <Navigate to="/" state={{ from: location }} replace />
  )
}
