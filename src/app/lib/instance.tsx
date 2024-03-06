import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { type Database } from '@/app/types/database'
import { cache } from 'react'
import ProfileData from '../components/profile-data'

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

export async function fetchRandomPosts () {
  const supabase = createServerClient()
  return await supabase
    .from('posts')
    .select('*, user:users(*)')
    .order('content')
}

export async function FetchProfileData () {
  const supabase = createServerClient()
  const { data: users } = await supabase.from('users').select('*')

  return (
    <>
      {users?.map(user => (
        <ProfileData
          key={user.id}
          userFullName={user.name}
          userName={user.user_name}
          avatarUrl={user.avatar_url}
        />
      ))}
    </>
  )
}
