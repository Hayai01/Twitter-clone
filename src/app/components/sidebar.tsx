'use client'
import { useState } from 'react'
import Link from 'next/link'
import { IconHome, IconSearch, IconUser, IconBrandGithubFilled } from '@tabler/icons-react'

export default function Sidebar () {
  // Define el estado para controlar el ítem de la barra lateral activo
  const [activeItem, setActiveItem] = useState('home')

  return (
    <div className="sidebar fixed  ">
      {/* Icono de la web */}
      <div className="sidebar-icon flex justify-center">
  <Link href="/">
    <IconBrandGithubFilled className='h-16 w-16 mt-10'/>
  </Link>
</div>
      {/* Ítems de la barra lateral */}
      <div className="sidebar-items mt-10">
        <Link href="/" passHref>
          <div className={`sidebar-item ${activeItem === 'home' ? 'bg-gray-600 bg-opacity-30' : ''}`} onClick={() => { setActiveItem('home') }}>
            <div className="flex items-center">
              <IconHome className="mr-3" />
              <span className="text-white text-2xl font-semibold block py-4">Home</span>
            </div>
          </div>
        </Link>
        <Link href="/search" passHref>
          <div className={`sidebar-item ${activeItem === 'search' ? 'bg-gray-600 bg-opacity-30 ' : ''}`} onClick={() => { setActiveItem('search') }}>
            <div className="flex items-center">
              <IconSearch className="mr-3" />
              <span className="text-white text-2xl font-semibold block py-4">Search</span>
            </div>
          </div>
        </Link>
        <Link href="/profile" passHref>
          <div className={`sidebar-item ${activeItem === 'profile' ? 'bg-gray-600 bg-opacity-30' : ''}`} onClick={() => { setActiveItem('profile') }}>
            <div className="flex items-center">
              <IconUser className="mr-3" />
              <span className="text-white text-2xl font-semibold block py-4">Profile</span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
}
