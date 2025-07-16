import { RequireAuth } from '../../auth/require-auth'
import { useAuth } from '../../auth/auth-provider'
import Image from 'next/image'

export default function ProfilePage() {
  const { user } = useAuth()

  return (
    <RequireAuth>
      <div className="min-h-screen bg-gray-900 text-white">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/3">
              <div className="bg-gray-800 rounded-lg p-6 sticky top-4">
                <div className="flex flex-col items-center">
                  <div className="w-32 h-32 rounded-full bg-gray-700 mb-4 overflow-hidden">
                    <Image 
                      src="/default-avatar.jpg" 
                      alt="Profile" 
                      width={128}
                      height={128}
                      className="object-cover"
                    />
                  </div>
                  <h2 className="text-2xl font-bold">{user?.username || 'User'}</h2>
                  <p className="text-gray-400 mb-4">{user?.email}</p>
                  
                  <button className="w-full py-2 px-4 bg-gray-700 hover:bg-gray-600 rounded-md transition mb-4">
                    Edit Profile
                  </button>
                  
                  <div className="w-full border-t border-gray-700 pt-4">
                    <h3 className="font-semibold mb-2">Stream Stats</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Total Streams</span>
                        <span>24</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Followers</span>
                        <span>1,245</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Avg. Viewers</span>
                        <span>86</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="md:w-2/3">
              <div className="bg-gray-800 rounded-lg p-6 mb-6">
                <h2 className="text-xl font-semibold mb-4">About</h2>
                <p className="text-gray-300">
                  This is where your bio would go. Tell your viewers something about yourself!
                </p>
              </div>
              
              <div className="bg-gray-800 rounded-lg p-6">
                <h2 className="text-xl font-semibold mb-4">Past Streams</h2>
                <div className="space-y-4">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="flex gap-4 bg-gray-700 p-4 rounded-lg">
                      <div className="w-1/3 aspect-video bg-gray-600 rounded overflow-hidden">
                        <Image 
                          src={`/stream-thumb${i}.jpg`}
                          alt={`Stream ${i}`}
                          width={200}
                          height={120}
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <div className="w-2/3">
                        <h3 className="font-bold">Stream Title {i}</h3>
                        <p className="text-sm text-gray-400 mb-2">Streamed on {new Date().toLocaleDateString()}</p>
                        <div className="flex justify-between text-sm">
                          <span>1,2{i}4 views</span>
                          <span>{3*i}2 comments</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </RequireAuth>
  )
}