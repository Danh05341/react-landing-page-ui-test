import { Link } from 'react-router-dom'

function NotFoundPage() {
  return (
    <main className="mx-auto flex min-h-[70vh] w-full max-w-6xl items-center justify-center px-6 py-16">
      <div className="text-center">
        <p className="text-6xl font-semibold text-indigo-600">404</p>
        <h1 className="mt-2 text-3xl font-bold text-slate-900">Page not found</h1>
        <p className="mt-3 text-slate-600">
          Trang bạn tìm không tồn tại hoặc đã được di chuyển.
        </p>
        <Link
          to="/"
          className="mt-6 inline-flex rounded-lg bg-indigo-600 px-5 py-3 text-sm font-semibold text-white hover:bg-indigo-700"
        >
          Quay ve trang chủ
        </Link>
      </div>
    </main>
  )
}

export default NotFoundPage
