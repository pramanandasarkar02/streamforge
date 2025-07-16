import { RequireAuth } from '../../auth/require-auth'

export default function StreamPage() {
  return (
    <RequireAuth>
      <div className="min-h-screen bg-gray-900 text-white">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-6">Start Streaming</h1>
          
          <div className="bg-gray-800 rounded-lg p-6 mb-8">
            <h2 className="text-xl font-semibold mb-4">Stream Setup</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Stream Title</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="Enter your stream title"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Category</label>
                <select
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                  <option>Gaming</option>
                  <option>Music</option>
                  <option>Education</option>
                  <option>Just Chatting</option>
                </select>
              </div>
            </div>
            
            <div className="mt-6">
              <label className="block text-sm font-medium text-gray-300 mb-2">Stream Key</label>
              <div className="flex">
                <input
                  type="text"
                  className="flex-1 px-4 py-2 bg-gray-700 border border-gray-600 rounded-l-md text-white focus:outline-none"
                  value="sdf8-23k9-45jf-98k3"
                  readOnly
                />
                <button className="bg-gray-600 hover:bg-gray-500 px-4 py-2 rounded-r-md transition">
                  Copy
                </button>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-800 rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Stream Preview</h2>
            <div className="aspect-video bg-black flex items-center justify-center rounded-lg border border-gray-700">
              <div className="text-center">
                <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
                <p>Your stream will appear here when live</p>
              </div>
            </div>
            
            <div className="mt-6 flex justify-end">
              <button className="px-6 py-3 bg-red-600 hover:bg-red-700 rounded-lg font-bold transition">
                Start Streaming
              </button>
            </div>
          </div>
        </div>
      </div>
    </RequireAuth>
  )
}