import { Outlet } from 'react-router-dom'
import Header from '../components/layout/Header'

function MainLayout() {
  return (
    <div className="min-h-screen bg-white text-(--color-primary)">
      <Header />
      <Outlet />
    </div>
  )
}

export default MainLayout
