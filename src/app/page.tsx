import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { PostLists } from './components/post-list'
import { type Database } from './types/database'
import { ComposePost } from './components/compose-post'

export default async function Home () {
  const supabase = createServerComponentClient<Database>({ cookies })
  const { data: { session } } = await supabase.auth.getSession()

  if (session === null) {
    redirect('/login')
  }

  const { data: posts } = await supabase.from('posts').select('*, user:users(*)')

  return (
      <div className="w-1/2">
        <section className="max-w-[600px] mx-auto border-l border-r border-white/20 p-4 min-h-screen overflow-y-auto">
          <ComposePost userAvatarUrl={session?.user?.user_metadata?.avatar_url} />
          <PostLists posts={posts} />
        </section>
      </div>
  )
}
