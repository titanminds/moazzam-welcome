// app/auth/page.tsx
'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'

export default function AuthPage() {
    const searchParams = useSearchParams()
    const qTab = searchParams?.get('tab') // 'login' or 'register'
    const [activeTab, setActiveTab] = useState<'login' | 'register'>(qTab === 'register' ? 'register' : 'login')

    // keep tab in sync with query param if user lands with ?tab=register
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

                    {/* Forms */}
                    {activeTab === 'login' ? (
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
                                <div className="relative">
                                    <input
                                        type="password"
                                        className="w-full border border-gray-300 dark:border-gray-700 rounded-md px-3 py-2 pr-10 focus:ring-2 focus:ring-yellow-400 outline-none bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                                        placeholder="••••••••"
                                    />
                                    {/* eye icon placeholder (no toggle logic here) */}
                                    <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">👁️</div>
                                </div>
                            </div>

                            <button className="w-full bg-yellow-400 text-black font-semibold py-2 rounded hover:opacity-95">
                                Continue
                            </button>

                            <div className="flex items-center my-2">
                                <div className="flex-1 h-px bg-gray-200 dark:bg-gray-800"></div>
                                <span className="px-2 text-sm text-gray-500 dark:text-gray-400">Or sign in with</span>
                                <div className="flex-1 h-px bg-gray-200 dark:bg-gray-800"></div>
                            </div>

                            <button className="w-full border border-gray-300 dark:border-gray-700 rounded-md py-2 flex items-center justify-center gap-2 hover:bg-gray-50 dark:hover:bg-gray-800">
                                <img src="https://www.svgrepo.com/show/355037/google.svg" alt="Google" width={18} />
                                Google
                            </button>

                            <p className="text-center text-sm text-blue-600 mt-3 cursor-pointer hover:underline">I forgot my password</p>
                        </div>
                    ) : (
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
                    )}
                </div>
            </div>
        </div>
    )
}
