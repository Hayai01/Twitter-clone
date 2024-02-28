import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { AuthButtonServer } from '../components/auth-button-server'
import { redirect } from 'next/navigation'
import { PostLists } from '../components/post-list'
import { type Database } from '../types/database'
import { ComposePost } from '../components/compose-post'
import Sidebar from '../components/sidebar'
import { SearchBar } from '../components/searchbar'

export default async function Home () {
  const supabase = createServerComponentClient<Database>({ cookies })
  const { data: { session } } = await supabase.auth.getSession()

  if (session === null) {
    redirect('/login')
  }

  const { data: posts } = await supabase.from('posts').select('*, user:users(*)')

  return (
    <main className="flex min-h-screen">
      {/* Columna 1: Sidebar */}
      <div className="w-1/4 flex justify-end">
        <Sidebar />
      </div>

      {/* Columna 2: Posts */}
      <div className="w-1/2">
        <section className="max-w-[600px] mx-auto border-l border-r border-white/20 p-4 min-h-screen overflow-y-auto">
          <ComposePost userAvatarUrl={session?.user?.user_metadata?.avatar_url} />
          <PostLists posts={posts} />
        </section>
      </div>

      {/* Columna 3: Botón de autenticación */}
      <div className="w-1/4  justify-start max-h-[50px] mt-10 mr-20">
        <SearchBar/>
        <div className='w-100% mt-10 flex justify-center'>
        <AuthButtonServer />
        </div>

      </div>
    </main>
  )
}
