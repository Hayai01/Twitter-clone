import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { revalidatePath } from 'next/cache'
import { cookies } from 'next/headers'

export function ComposePost ({
  userAvatarUrl
}: {
  userAvatarUrl: string
}) {
  const addPost = async (formData: FormData) => {
    'use server'
    const content = formData.get('content')
    if (content === null) return
    const supabase = createServerComponentClient({ cookies })
    const { data: { user } } = await supabase.auth.getUser()
    if (user === null) return
    await supabase.from('posts').insert({ content, user_id: user.id })
    revalidatePath('/')
  }

  return (
        <form action={addPost} className='flex flex-row p-3 border-b border-white/20'>
            <img className= 'rounded-full w-10 h-10 mr-2'/>
            <div className='flex flex-1 flex-col gap-y-4'>

            <textarea
            name="content"
            rows={4}
            placeholder='What is going on?'
            className='w-full text-sm bg-black placeholder-gray-500 p-4'
            ></textarea>
            <button type='submit' className='bg-sky-300 font-bold rounded-full px-5 py-2 self-end'>
                Postear
            </button>
            </div>
        </form>
  )
}
