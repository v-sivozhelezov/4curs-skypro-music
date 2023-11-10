import { Route, Routes } from 'react-router-dom'
import MainPage from './pages/MainPage/MainPage'
import LoginPage from './pages/LoginPage/LoginPage'
import NotFound from './pages/NotFound/NotFound'
import FavoritesPage from './pages/FavoritesPage/FavoritesPage'
import RegisterPage from './pages/RegisterPage/RegisterPage'

export default function AppRoutes() {
  // const { category } = props
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/favorites" element={<FavoritesPage />} />
      <Route path="/category/1" element={<FavoritesPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
