import Navbar from '@/app/components/Navbar'
import ThreeButtons from '@/app/components/ThreeButtons'

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Navbar />
      <main className="max-w-5xl mx-auto p-6">
        <ThreeButtons />
      </main>
    </div>
  )
}
