'use server'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { type Database } from '../types/database'

export async function searchPosts (searchQuery: string) {
  const supabase = createServerComponentClient<Database>({ cookies })
  const { data: posts } = await supabase.from('posts').select('*, user:users(*)')

  if (posts === null) return

  // Filtrar los posts según la búsqueda
  return posts.filter(post => post.tittle.toLowerCase().includes(searchQuery))
}
