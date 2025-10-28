'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'

export default function AuthContent() {
    const searchParams = useSearchParams()
    const qTab = searchParams?.get('tab')
    const [activeTab, setActiveTab] = useState<'login' | 'register'>(
        qTab === 'register' ? 'register' : 'login'
    )

    useEffect(() => {
        if (qTab === 'register') setActiveTab('register')
        if (qTab === 'login') setActiveTab('login')
    }, [qTab])

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-950 p-6">
            <div className="w-full max-w-md">
                <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-800">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 text-center mb-6">
                        Welcome to <span className="text-yellow-500">MyCRM</span>
                    </h2>

                    {/* Tabs */}
                    <div className="flex border-b border-gray-200 dark:border-gray-800 mb-6">
                        <button
                            onClick={() => setActiveTab('login')}
                            className={`flex-1 pb-2 font-semibold ${activeTab === 'login'
                                    ? 'border-b-2 border-yellow-400 text-gray-900 dark:text-gray-100'
                                    : 'text-gray-400'
                                }`}
                        >
                            Sign in
                        </button>
                        <button
                            onClick={() => setActiveTab('register')}
                            className={`flex-1 pb-2 font-semibold ${activeTab === 'register'
                                    ? 'border-b-2 border-yellow-400 text-gray-900 dark:text-gray-100'
                                    : 'text-gray-400'
                                }`}
                        >
                            Create an account
                        </button>
                    </div>

                    {/* Login or Register form */}
                    {activeTab === 'login' ? (
                        <LoginForm />
                    ) : (
                        <RegisterForm />
                    )}
                </div>
            </div>
        </div>
    )
}

function LoginForm() {
    return (
        <div className="space-y-4">
            <div>
                <label className="block text-sm text-gray-600 dark:text-gray-300 mb-1">Your email address</label>
                <input
                    type="email"
                    className="w-full border border-gray-300 dark:border-gray-700 rounded-md px-3 py-2 focus:ring-2 focus:ring-yellow-400 outline-none bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                    placeholder="you@example.com"
                />
            </div>

            <div>
                <label className="block text-sm text-gray-600 dark:text-gray-300 mb-1">Password</label>
                <input
                    type="password"
                    className="w-full border border-gray-300 dark:border-gray-700 rounded-md px-3 py-2 focus:ring-2 focus:ring-yellow-400 outline-none bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                    placeholder="••••••••"
                />
            </div>

            <button className="w-full bg-yellow-400 text-black font-semibold py-2 rounded hover:opacity-95">
                Continue
            </button>
        </div>
    )
}

function RegisterForm() {
    return (
        <div className="space-y-4">
            <div>
                <label className="block text-sm text-gray-600 dark:text-gray-300 mb-1">Full Name</label>
                <input
                    type="text"
                    className="w-full border border-gray-300 dark:border-gray-700 rounded-md px-3 py-2 focus:ring-2 focus:ring-yellow-400 outline-none bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                    placeholder="Your full name"
                />
            </div>

            <div>
                <label className="block text-sm text-gray-600 dark:text-gray-300 mb-1">Email</label>
                <input
                    type="email"
                    className="w-full border border-gray-300 dark:border-gray-700 rounded-md px-3 py-2 focus:ring-2 focus:ring-yellow-400 outline-none bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                    placeholder="you@example.com"
                />
            </div>

            <div>
                <label className="block text-sm text-gray-600 dark:text-gray-300 mb-1">Password</label>
                <input
                    type="password"
                    className="w-full border border-gray-300 dark:border-gray-700 rounded-md px-3 py-2 focus:ring-2 focus:ring-yellow-400 outline-none bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                    placeholder="Choose a password"
                />
            </div>

            <button className="w-full bg-yellow-400 text-black font-semibold py-2 rounded hover:opacity-95">
                Create Account
            </button>
        </div>
    )
}
