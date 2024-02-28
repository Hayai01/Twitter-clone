'use client'
import React, { useState } from 'react'
import { SearchResults } from './search-results'
import { searchPosts } from './search-service'
import { type Post } from '@/app/types/posts'

export function SearchBar () {
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState<Post[]>([])

  // Función para realizar la búsqueda en tiempo real
  const handleSearchChange = async (value: string) => {
    setSearchQuery(value)
    const results = await searchPosts(value)

    setSearchResults(results)
  }

  return (
    <div>
      <div className="flex items-center border border-gray-300 rounded-md p-2">
        <input
          type="text"
          placeholder="Buscar..."
          value={searchQuery}
          onChange={async (e) => { handleSearchChange(e.target.value) }} // Escuchar el evento onChange para actualizar la búsqueda en tiempo real
          className="flex-grow px-2 py-1 outline-none bg-transparent"
        />
      </div>
      {searchQuery.trim() !== '' && <SearchResults results={searchResults} />}
    </div>
  )
}
