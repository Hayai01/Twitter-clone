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
          <li key={post.id} className="mb-4 p-4 rounded-lg flex justify-between items-center"> {/* Utiliza 'justify-between' para distribuir los elementos a lo largo del eje principal */}
            <Link href={`/${post.id}`}>
              <div className="flex items-center"> {/* Envuelve el título en un contenedor flex */}
                <h3 className="text-lg font-semibold mr-2">{post.title}</h3> {/* Agrega el título del post */}
              </div>
            </Link>
              <div className="flex items-center"> {/* Envuelve el nombre de usuario y el avatar en un contenedor flex */}
              <img src={post.user.avatar_url} alt="Avatar" className="w-8 h-8 rounded-full mr-2" /> {/* Agrega el avatar del usuario */}
              <span className="text-gray-500 ">{post.user.user_name}</span> {/* Agrega el nombre de usuario */}
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
