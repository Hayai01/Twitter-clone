import { fetchPost } from '../lib/instance'
import { PostLists } from '../components/post-list'

export default async function Slug ({ params }: { params: { slug: string } }) {
  const { slug } = params
  const { data } = await fetchPost(slug)
  return (

    <div className="w-1/2">
        <section className="max-w-[600px] mx-auto border-l border-r border-white/20 p-4 min-h-screen overflow-y-auto">
        {data ? <PostLists posts={data}/> : null}
        </section>
      </div>

  )
}
