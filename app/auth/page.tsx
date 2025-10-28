'use client'

import { Suspense } from 'react'
import AuthContent from './AuthContent'

export default function AuthPage() {
    return (
        <Suspense fallback={<div className="text-center p-10">Loading...</div>}>
            <AuthContent />
        </Suspense>
    )
}
