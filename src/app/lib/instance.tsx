import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { type Database } from '@/app/types/database'
import { cache } from 'react'

export const createServerClient = cache(() => {
  const cookieStore = cookies()
  return createServerComponentClient<Database>({
    cookies: () => cookieStore
  })
})

export function fetchPost (id: string) {
  const supabase = createServerClient()
  return supabase.from('posts').select('*,user:users(*)').eq('id', id)
}
