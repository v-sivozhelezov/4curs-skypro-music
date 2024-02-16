import { Route, Routes } from 'react-router-dom'
import MainPage from './pages/MainPage/MainPage'
// import LoginPage from './pages/LoginPage/LoginPage'
import NotFound from './pages/NotFound/NotFound'
import FavoritesPage from './pages/FavoritesPage/FavoritesPage'
import CategoryPage from './pages/CategoryPage/CategoryPage'
import ProtectedRoute from './components/protected-route/protected-route'
import AuthPage from './pages/AuthPage/AuthPage'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/register" element={<AuthPage isLoginPage={false} />} />
      <Route path="/login" element={<AuthPage isLoginPage />} />

      <Route element={<ProtectedRoute />}>
        <Route path="/" element={<MainPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/category/:id" element={<CategoryPage />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
