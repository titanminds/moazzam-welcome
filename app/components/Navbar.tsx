'use client'
import Link from 'next/link'

export default function Navbar() {
    return (
        <nav className="flex items-center justify-between px-6 py-4 bg-gray-900 border-b border-gray-800">
            <h1 className="text-xl font-bold text-yellow-400">MyCRM</h1>

            <div className="flex gap-4">
                {/* Login Button */}
                <Link
                    href="/auth?tab=login"
                    className="text-gray-300 hover:text-yellow-400 transition"
                >
                    Login
                </Link>

                {/* Register Button */}
                <Link
                    href="/auth?tab=register"
                    className="bg-yellow-400 text-black font-semibold px-4 py-1.5 rounded hover:opacity-90 transition"
                >
                    Register
                </Link>
            </div>
        </nav>
    )
}
