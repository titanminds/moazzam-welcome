// app/layout.tsx
import './globals.css'

export const metadata = {
  title: 'My CRM - Layout with 3 Buttons',
  description: 'Simple layout showing 3 buttons with different content',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-950 text-white min-h-screen font-sans">
        <header className="bg-gray-900 border-b border-gray-800 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500" />
            <h1 className="text-xl font-semibold text-yellow-400">My CRM</h1>
          </div>
          <nav className="text-sm text-gray-300">Welcome, Admin</nav>
        </header>

        <div className="flex">
          <aside className="w-64 p-6 border-r border-gray-800 hidden md:block">
            <p className="text-sm text-gray-400">Sidebar (optional)</p>
          </aside>

          <main className="flex-1 p-6">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
