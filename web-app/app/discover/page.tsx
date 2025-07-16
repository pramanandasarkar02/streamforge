import { RequireAuth } from '../../auth/require-auth'
import Image from 'next/image'

export default function DiscoverPage() {
  const streams = [
    {
      id: 1,
      title: 'Playing Valorant Ranked',
      streamer: 'ProGamer123',
      viewers: 1245,
      category: 'Gaming',
      thumbnail: '/stream1.jpg'
    },
    {
      id: 2,
      title: 'Music Production Live',
      streamer: 'MusicMaker',
      viewers: 892,
      category: 'Music',
      thumbnail: '/stream2.jpg'
    },
    {
      id: 3,
      title: 'Coding a React App',
      streamer: 'DevStreamer',
      viewers: 456,
      category: 'Programming',
      thumbnail: '/stream3.jpg'
    },
    {
      id: 4,
      title: 'Just Chatting with Viewers',
      streamer: 'ChattyPerson',
      viewers: 321,
      category: 'Just Chatting',
      thumbnail: '/stream4.jpg'
    },
    {
      id: 5,
      title: 'League of Legends Tournament',
      streamer: 'EsportsPro',
      viewers: 2456,
      category: 'Gaming',
      thumbnail: '/stream5.jpg'
    },
    {
      id: 6,
      title: 'Digital Art Creation',
      streamer: 'ArtisticSoul',
      viewers: 178,
      category: 'Art',
      thumbnail: '/stream6.jpg'
    }
  ]

  return (
    <RequireAuth>
      <div className="min-h-screen bg-gray-900 text-white">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-8">Discover Live Streams</h1>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {streams.map(stream => (
              <div key={stream.id} className="bg-gray-800 rounded-lg overflow-hidden hover:translate-y-1 transition-transform">
                <div className="relative aspect-video">
                  <Image 
                    src={stream.thumbnail} 
                    alt={stream.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-2 left-2 bg-red-600 px-2 py-1 rounded text-sm font-semibold">
                    LIVE
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 px-2 py-1 rounded text-sm">
                    {stream.viewers.toLocaleString()} viewers
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-1 truncate">{stream.title}</h3>
                  <p className="text-gray-400 mb-2">{stream.streamer}</p>
                  <span className="inline-block bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-gray-300">
                    {stream.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </RequireAuth>
  )
}