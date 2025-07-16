import { RequireAuth } from '../auth/require-auth'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <RequireAuth>
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
        {/* Navbar */}
        <nav className="bg-gray-900 border-b border-gray-800 py-4 px-6 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Image src="/logo.png" alt="StreamForge" width={40} height={40} />
            <span className="text-xl font-bold">StreamForge</span>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/profile" className="hover:text-red-400 transition">
              Profile
            </Link>
            <Link href="/logout" className="bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg transition">
              Logout
            </Link>
          </div>
        </nav>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-20 flex flex-col items-center justify-center text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-red-500">
            Welcome to StreamForge
          </h1>
          
          <p className="text-xl md:text-2xl mb-10 max-w-3xl text-gray-300">
            Ready to start your streaming journey?
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Link 
              href="/stream" 
              className="px-8 py-4 bg-red-600 hover:bg-red-700 rounded-lg font-bold text-lg transition-all transform hover:scale-105"
            >
              Go Live Now
            </Link>
            
            <Link 
              href="/discover" 
              className="px-8 py-4 bg-transparent border-2 border-gray-600 hover:border-white rounded-lg font-bold text-lg transition-all"
            >
              Discover Streams
            </Link>
          </div>
        </div>
      </div>
    </RequireAuth>
  )
}