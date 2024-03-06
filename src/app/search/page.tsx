import { fetchRandomPosts } from '../lib/instance'
import { PostLists } from '../components/post-list'

export default async function Search () {
  const { data } = await fetchRandomPosts()
  console.log(data)
  return (
    <div className="w-1/2">
      <section className="max-w-[600px] mx-auto border-l border-r border-white/20 p-4 min-h-screen overflow-y-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Descubre más publicaciones</h1>
          <p className="text-gray-400">Explora estos interesantes posts que podrían interesarte.</p>
        </div>
        {data ? <PostLists posts={data} /> : null}
      </section>
    </div>
  )
}
