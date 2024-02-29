import React from 'react'
import Link from 'next/link'
import { type Post } from '@/app/types/posts'

interface SearchResultsProps {
  results: Post[]
}

export const SearchResults: React.FC<SearchResultsProps> = ({ results }) => {
  return (
    <div className="rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-semibold mb-4">Resultados de la búsqueda</h2>
      <ul>
        {results.map(post => (
          <li key={post.id} className="mb-4 p-4 rounded-lg">
            <Link href={`/pages/postpage/${post.id}`}>
          <h3 className="text-lg font-semibold">{post.tittle}</h3>
              </Link>
            <div className="flex items-center">
              <img src={post.user.avatar_url} alt="Avatar" className="w-8 h-8 rounded-full mr-2" />
              <span className="text-gray-500">{post.user.user_name}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
