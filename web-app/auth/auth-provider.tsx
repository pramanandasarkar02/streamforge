'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

type AuthContextType = {
  user: any
  login: (email: string, password: string) => Promise<void>
  logout: () => void
  register: (email: string, password: string, username: string) => Promise<void>
}

const AuthContext = createContext<AuthContextType | null>(null)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState(null)

  const login = async (email: string, password: string) => {
    // Replace with actual authentication logic
    const mockUser = { email, username: email.split('@')[0] }
    setUser(mockUser as any)
    localStorage.setItem('user', JSON.stringify(mockUser))
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('user')
  }

  const register = async (email: string, password: string, username: string) => {
    // Replace with actual registration logic
    const mockUser = { email, username }
    setUser(mockUser as any)
    localStorage.setItem('user', JSON.stringify(mockUser))
  }

  return (
    <AuthContext.Provider value={{ user, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}