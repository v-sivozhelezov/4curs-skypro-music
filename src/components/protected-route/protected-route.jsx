import { Navigate, Outlet } from 'react-router-dom'

export default function ProtectedRoute({ redirectPath = '/login' }) {
  console.log(localStorage.getItem('user'))

  if (localStorage.getItem('user') === null) {
    console.log(true)
    return <Navigate to={redirectPath} replace />
  }
  return <Outlet />
}
