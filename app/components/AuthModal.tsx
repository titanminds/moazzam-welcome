'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function AuthModal({
    tab,
    onClose,
}: {
    tab: 'login' | 'register'
    onClose: () => void
}) {
    const [activeTab, setActiveTab] = useState(tab)

    return (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-xl w-[380px] p-6 shadow-2xl relative"
            >
                {/* Close Button */}
                <button onClick={onClose} className="absolute top-3 right-3 text-gray-400 hover:text-black">
                    ✖
                </button>

                <h2 className="text-2xl font-bold text-gray-900 text-center mb-6">
                    Welcome to <span className="text-yellow-500">MyCRM</span>
                </h2>

                {/* Tabs */}
                <div className="flex border-b border-gray-200 mb-6">
                    <button
                        onClick={() => setActiveTab('login')}
                        className={`flex-1 pb-2 font-semibold ${activeTab === 'login'
                                ? 'border-b-2 border-yellow-400 text-gray-900'
                                : 'text-gray-400'
                            }`}
                    >
                        Sign in
                    </button>
                    <button
                        onClick={() => setActiveTab('register')}
                        className={`flex-1 pb-2 font-semibold ${activeTab === 'register'
                                ? 'border-b-2 border-yellow-400 text-gray-900'
                                : 'text-gray-400'
                            }`}
                    >
                        Create an account
                    </button>
                </div>

                {/* Forms */}
                <AnimatePresence mode="wait">
                    {activeTab === 'login' ? (
                        <motion.div
                            key="login"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.2 }}
                            className="space-y-4"
                        >
                            <div>
                                <label className="block text-sm text-gray-600 mb-1">Your email address</label>
                                <input
                                    type="email"
                                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-yellow-400 outline-none"
                                />
                            </div>
                            <div>
                                <label className="block text-sm text-gray-600 mb-1">Password</label>
                                <input
                                    type="password"
                                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-yellow-400 outline-none"
                                />
                            </div>
                            <button className="w-full bg-yellow-400 text-black font-semibold py-2 rounded hover:opacity-90">
                                Continue
                            </button>

                            <div className="flex items-center my-2">
                                <div className="flex-1 h-px bg-gray-300"></div>
                                <span className="px-2 text-sm text-gray-500">Or sign in with</span>
                                <div className="flex-1 h-px bg-gray-300"></div>
                            </div>

                            <button className="w-full border border-gray-300 rounded-md py-2 flex items-center justify-center gap-2 hover:bg-gray-50">
                                <img src="https://www.svgrepo.com/show/355037/google.svg" alt="Google" width={20} />
                                Google
                            </button>

                            <p className="text-center text-sm text-blue-600 mt-3 cursor-pointer hover:underline">
                                I forgot my password
                            </p>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="register"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.2 }}
                            className="space-y-4"
                        >
                            <div>
                                <label className="block text-sm text-gray-600 mb-1">Full Name</label>
                                <input
                                    type="text"
                                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-yellow-400 outline-none"
                                />
                            </div>
                            <div>
                                <label className="block text-sm text-gray-600 mb-1">Email</label>
                                <input
                                    type="email"
                                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-yellow-400 outline-none"
                                />
                            </div>
                            <div>
                                <label className="block text-sm text-gray-600 mb-1">Password</label>
                                <input
                                    type="password"
                                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-yellow-400 outline-none"
                                />
                            </div>
                            <button className="w-full bg-yellow-400 text-black font-semibold py-2 rounded hover:opacity-90">
                                Create Account
                            </button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </div>
    )
}
