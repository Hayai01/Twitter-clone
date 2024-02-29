import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { AuthButtonServer } from './components/auth-button-server'
import { redirect } from 'next/navigation'
import { type Post } from './types/posts'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Sidebar from './components/sidebar'
import { SearchBar } from './components/searchbar'

export default function PostPage () {
  const router = useRouter()
  const { postId } = router.query
  const [post, setPost] = useState<Post | null>(null)

  useEffect(() => {
    const fetchPost = async () => {
      if (postId) {
        const supabase = createServerComponentClient({ cookies })
        const { data: post } = await supabase.from('posts').select('*').eq('id', postId).single()
        setPost(post)
      }
    }

    fetchPost()
  }, [postId])

  if (!post) {
    // Puedes mostrar un mensaje de carga mientras se carga el post
    return <div>Cargando...</div>
  }

  return (
    <main className="flex min-h-screen">
      {/* Columna 1: Sidebar */}
      <div className="w-1/4 flex justify-end">
        <Sidebar />
      </div>

      {/* Columna 2: Post específico */}
      <div className="w-1/2">
        <section className="max-w-[600px] mx-auto border-l border-r border-white/20 p-4 min-h-screen overflow-y-auto">
          {/* Renderiza el post específico aquí */}
          <h2>{post.title}</h2>
          <p>{post.content}</p>
          {/* Otros detalles del post */}
        </section>
      </div>

      {/* Columna 3: Botón de autenticación */}
      <div className="w-1/4  justify-start max-h-[50px] mt-10 mr-20">
        <SearchBar />
        <div className='w-100% mt-10 flex justify-center'>
          <AuthButtonServer />
        </div>
      </div>
    </main>
  )
}
