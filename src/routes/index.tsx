import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Login from '@pages/Login'
import PhotoPage from '@pages/PhotoPage'
import DogsList from '@pages/DogsList'
import RequireAuth from './RequireAuth'

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route element={<RequireAuth />}>
          <Route path="/dogs-list" element={<DogsList />} />
          <Route path="/photos" element={<PhotoPage />} />
        </Route>
      </Routes>
    </Router>
  )
}
