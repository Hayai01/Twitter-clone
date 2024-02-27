'use client'

import { useState } from 'react'

export function SearchBar () {
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value)
  }

  const handleSearchSubmit = () => {
    // Aquí puedes implementar la lógica para manejar la búsqueda
    console.log('Búsqueda realizada:', searchQuery)
  }

  return (
    <div className="flex items-center border border-gray-300 rounded-md p-2">
      <input
        type="text"
        placeholder="Buscar..."
        value={searchQuery}
        onChange={handleSearchChange}
        className="flex-grow px-2 py-1 outline-none bg-transparent"
      />
      <button onClick={handleSearchSubmit} className="ml-2 px-4 py-1 bg-blue-500 text-white rounded-md">Buscar</button>
    </div>
  )
}
