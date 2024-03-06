import PostCard from './post-card'
import { type Post } from '@/app/types/posts'

export function PostLists ({ posts }: { posts: Post[] }) {
  return (
    <>
      {posts?.map(post => {
        const {
          id,
          user,
          content,
          title // Incluir el título del post
        } = post

        const {
          user_name: userName,
          name: userFullName,
          avatar_url: avatarUrl
        } = user

        return (
          <PostCard
            key={id}
            postId={id}
            userFullName={userFullName}
            userName={userName}
            avatarUrl={avatarUrl}
            content={content}
            title={title}
          />
        )
      })}
    </>
  )
}
