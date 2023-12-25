import { Route, Routes } from 'react-router-dom'
import MainPage from './pages/MainPage/MainPage'
// import LoginPage from './pages/LoginPage/LoginPage'
import NotFound from './pages/NotFound/NotFound'
import FavoritesPage from './pages/FavoritesPage/FavoritesPage'
import CategoryPage from './pages/CategoryPage/CategoryPage'
import ProtectedRoute from './components/protected-route/protected-route'
import AuthPage from './pages/AuthPage/AuthPage'

export default function AppRoutes(props) {
  const {
    tracks,
    loadingPage,
    handleSelectionTrackButtonClick,
  } = props

  return (
    <Routes>
      <Route path="/register" element={<AuthPage />} />
      <Route path="/login" element={<AuthPage />} />

      <Route element={<ProtectedRoute />}>
        <Route
          path="/"
          element={
            <MainPage
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
