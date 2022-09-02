import Header from '@components/atoms/Header'
import { Navigate, Outlet, useLocation } from 'react-router-dom'

export default function RequireAuth() {
  const tokenKey = '@dog_breed:token'

  const token = localStorage.getItem(tokenKey)

  const location = useLocation()

  return token ? (
    <>
      <Header />

      <Outlet />
    </>
  ) : (
    <Navigate to="/" state={{ from: location }} replace />
  )
}
