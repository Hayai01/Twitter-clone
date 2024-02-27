'use server'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'

// Función para editar un post
export const editPost = async (postId: string, newContent: string) => {
  try {
    // Crear un cliente de Supabase
    const supabase = createServerComponentClient({ cookies })

    // Actualizar el contenido del post en la base de datos
    const { error } = await supabase
      .from('posts')
      .update({ content: newContent })
      .eq('id', postId)

    if (error === null) return

    // Éxito
    console.log('Post editado correctamente')
  } catch (error) {
    console.error('Error al editar el post:', error)
  }
}
