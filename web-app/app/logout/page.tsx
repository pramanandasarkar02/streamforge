'use client'

import { useEffect } from 'react'
import { useAuth } from '../../auth/auth-provider'
import { useRouter } from 'next/navigation'

export default function LogoutPage() {
  const { logout } = useAuth()
  const router = useRouter()

  useEffect(() => {
    logout()
    router.push('/login')
  }, [logout, router])

  return null
}