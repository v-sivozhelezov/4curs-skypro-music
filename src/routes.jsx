import { Route, Routes } from 'react-router-dom'
import MainPage from './pages/MainPage/MainPage'
import LoginPage from './pages/LoginPage/LoginPage'
import NotFound from './pages/NotFound/NotFound'
import FavoritesPage from './pages/FavoritesPage/FavoritesPage'
import RegisterPage from './pages/RegisterPage/RegisterPage'
import CategoryPage from './pages/CategoryPage/CategoryPage'
import ProtectedRoute from './components/protected-route/protected-route'

export default function AppRoutes(props) {
  const {
    handleLoginButtonClick,
    tracks,
    loadingPage,
    handleSelectionTrackButtonClick,
  } = props

  return (
    <Routes>
      <Route path="/register" element={<RegisterPage />} />
      <Route
        path="/login"
        element={<LoginPage handleLoginButtonClick={handleLoginButtonClick} />}
      />

      <Route element={<ProtectedRoute />}>
        <Route
          path="/"
          element={
            <MainPage
              handleLoginButtonClick={handleLoginButtonClick}
              loadingPage={loadingPage}
              tracks={tracks}
              handleSelectionTrackButtonClick={handleSelectionTrackButtonClick}
            />
          }
        />
        <Route
          path="/favorites"
          element={
            <FavoritesPage
              loadingPage={loadingPage}
              handleSelectionTrackButtonClick={handleSelectionTrackButtonClick}
            />
          }
        />
        <Route
          path="/category/:id"
          element={
            <CategoryPage
              loadingPage={loadingPage}
              handleSelectionTrackButtonClick={handleSelectionTrackButtonClick}
            />
          }
        />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
