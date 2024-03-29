'use server'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { revalidatePath } from 'next/cache'
import { cookies } from 'next/headers'

export async function deletePost (postId: string) {
  const supabase = createServerComponentClient({ cookies })
  await supabase.from('posts').delete().eq('id', postId)
  revalidatePath('/')
  console.log(postId)
}
