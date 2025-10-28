'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

type Tab = 'overview' | 'clients' | 'settings'

export default function ThreeButtons() {
    const [active, setActive] = useState<Tab>('overview')
    const [search, setSearch] = useState('')
    const [selectedClient, setSelectedClient] = useState<any>(null)

    const clients = [
        { id: 1, name: 'Ali Khan', email: 'ali@example.com', phone: '+92 301 1234567', status: 'Active' },
        { id: 2, name: 'Sara Ahmed', email: 'sara@example.com', phone: '+92 312 9876543', status: 'Pending' },
        { id: 3, name: 'Bilal Iqbal', email: 'bilal@example.com', phone: '+92 333 8889999', status: 'Suspended' },
    ]

    const filteredClients = clients.filter(
        (c) =>
            c.name.toLowerCase().includes(search.toLowerCase()) ||
            c.email.toLowerCase().includes(search.toLowerCase())
    )

    const btnClass = (tab: Tab) =>
        `px-4 py-2 rounded-md font-medium transition ${active === tab
            ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-black'
            : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
        }`

    return (
        <div className="space-y-6 relative">
            {/* === Top Nav Buttons === */}
            <div className="flex gap-3">
                <button className={btnClass('overview')} onClick={() => setActive('overview')}>
                    Overview
                </button>
                <button className={btnClass('clients')} onClick={() => setActive('clients')}>
                    Clients
                </button>
                <button className={btnClass('settings')} onClick={() => setActive('settings')}>
                    Settings
                </button>
            </div>

            {/* === Dynamic Section === */}
            <section className="bg-gray-900 p-6 rounded-lg border border-gray-800 overflow-hidden relative">
                {active === 'overview' && (
                    <div>
                        <h2 className="text-xl font-semibold mb-4">Dashboard Overview</h2>

                        {/* === Stats Cards === */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {[
                                { title: 'Total Clients', value: 432 },
                                { title: 'Active Clients', value: 298 },
                                { title: 'Deposits Today', value: '$5,400' },
                                { title: 'Withdrawals Today', value: '$2,300' },
                            ].map((stat, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="bg-gradient-to-br from-yellow-400/10 to-orange-500/10 p-4 rounded-xl border border-yellow-400/30 shadow-[0_0_20px_rgba(255,165,0,0.15)]"
                                >
                                    <p className="text-gray-300 text-sm">{stat.title}</p>
                                    <h2 className="text-2xl font-bold text-yellow-400 mt-1">{stat.value}</h2>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                )}

                {active === 'clients' && (
                    <div className="relative">
                        <h2 className="text-xl font-semibold mb-4">Clients</h2>

                        {/* === Search Input === */}
                        <input
                            type="text"
                            placeholder="Search clients by name or email..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="w-full mb-4 p-2 rounded bg-gray-800 border border-gray-700 text-sm text-gray-200 focus:ring-2 focus:ring-yellow-400 outline-none"
                        />

                        {/* === Client List === */}
                        <div className="space-y-3">
                            {filteredClients.map((c) => (
                                <div
                                    key={c.id}
                                    className="bg-gray-800 p-4 rounded-lg flex justify-between items-center hover:bg-gray-750 transition"
                                >
                                    <div>
                                        <p className="font-medium text-gray-100">{c.name}</p>
                                        <p className="text-sm text-gray-400">{c.email}</p>
                                        <p className="text-xs text-gray-500">{c.phone}</p>
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <span
                                            className={`text-xs font-semibold px-2 py-1 rounded ${c.status === 'Active'
                                                    ? 'bg-green-600/20 text-green-400'
                                                    : c.status === 'Pending'
                                                        ? 'bg-yellow-600/20 text-yellow-400'
                                                        : 'bg-red-600/20 text-red-400'
                                                }`}
                                        >
                                            {c.status}
                                        </span>
                                        <button
                                            onClick={() => setSelectedClient(c)}
                                            className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-sm px-3 py-1 rounded font-semibold hover:opacity-90"
                                        >
                                            View
                                        </button>
                                    </div>
                                </div>
                            ))}

                            {filteredClients.length === 0 && (
                                <p className="text-center text-gray-500 mt-4">No clients found.</p>
                            )}
                        </div>

                        {/* === Drawer (Client Details) === */}
                        <AnimatePresence>
                            {selectedClient && (
                                <motion.div
                                    initial={{ x: '100%' }}
                                    animate={{ x: 0 }}
                                    exit={{ x: '100%' }}
                                    transition={{ type: 'spring', stiffness: 120, damping: 20 }}
                                    className="fixed top-0 right-0 h-full w-full md:w-[400px] bg-gray-950 border-l border-yellow-500/20 shadow-[0_0_30px_rgba(255,165,0,0.2)] p-6 z-50"
                                >
                                    <button
                                        onClick={() => setSelectedClient(null)}
                                        className="absolute top-3 right-3 text-gray-400 hover:text-yellow-400"
                                    >
                                        ✖
                                    </button>

                                    <h3 className="text-2xl font-semibold text-yellow-400 mb-4">
                                        Client Details
                                    </h3>

                                    <div className="space-y-3 text-gray-200">
                                        <p>
                                            <strong>Name:</strong> {selectedClient.name}
                                        </p>
                                        <p>
                                            <strong>Email:</strong> {selectedClient.email}
                                        </p>
                                        <p>
                                            <strong>Phone:</strong> {selectedClient.phone}
                                        </p>
                                        <p>
                                            <strong>Status:</strong>{' '}
                                            <span
                                                className={`font-semibold ${selectedClient.status === 'Active'
                                                        ? 'text-green-400'
                                                        : selectedClient.status === 'Pending'
                                                            ? 'text-yellow-400'
                                                            : 'text-red-400'
                                                    }`}
                                            >
                                                {selectedClient.status}
                                            </span>
                                        </p>

                                        <div className="mt-6 border-t border-gray-800 pt-3">
                                            <h4 className="text-gray-300 text-sm font-semibold mb-2">
                                                Recent Activity:
                                            </h4>
                                            <ul className="text-sm text-gray-400 space-y-1">
                                                <li>• Deposit: $1,200</li>
                                                <li>• Withdrawal: $500</li>
                                                <li>• Updated KYC documents</li>
                                            </ul>
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                )}

                {active === 'settings' && (
                    <div>
                        <h2 className="text-xl font-semibold mb-2">Settings</h2>
                        <p className="text-gray-300">Yahan se app ki basic settings change kar sakte ho.</p>
                    </div>
                )}
            </section>
        </div>
    )
}
