'use client'
import { useState } from 'react'
import { Card, CardHeader, CardBody, CardFooter, Avatar } from '@nextui-org/react'
import Link from 'next/link'
import { IconHeart, IconMessageCircle2, IconRepeat, IconTrash, IconEdit } from '@tabler/icons-react'
import { deletePost } from './delete-post'
import { editPost } from './edit-posts'

export default function PostCard ({
  postId,
  userFullName,
  userName,
  avatarUrl,
  content
}: {
  postId: string
  userFullName: string
  userName: string
  avatarUrl: string
  content: string
}) {
  const [isEditing, setIsEditing] = useState(false)
  const [newContent, setNewContent] = useState(content)

  return (
    <Card className="shadow-none bg-transparente hover:bg-slate-800 transition border-b rounded-none border-white/20 ">
      <CardHeader className="justify-between">
        <div className="flex gap-2">
          <Link href= {`/${userName}`}>
            <Avatar radius="full" size="md" src={avatarUrl} />
          </Link>
          <div className="flex flex-col gap-1 items-start justify-center">
            <h4 className="text-small font-semibold leading-none text-default-600">{userFullName}</h4>
            <h5 className="text-small tracking-tight text-default-400">@{userName}</h5>
          </div>
        </div>
      </CardHeader>
      <CardBody className="px-3 py-0 text-xs text-white">
        {isEditing
          ? (
          <textarea
            value={newContent}
            onChange={(e) => { setNewContent(e.target.value) }}
            rows={4}
            className="w-full text-sm bg-black placeholder-gray-500 p-4"
          ></textarea>
            )
          : (
          <p>{newContent}</p>
            )}
      </CardBody>
      <CardFooter className="gap-3">
      <button>
          <IconMessageCircle2 className='h-4 w-4'/>
        </button>
        <button>
          <IconHeart className='h-4 w-4'/>
        </button>
        <button>
          <IconRepeat className='h-4 w-4'/>
        </button>
        <button onClick={async () => { await deletePost(postId) }}>
          <IconTrash className='h-4 w-4'/>
        </button>
         <button onClick={() => { setIsEditing(true) }}>
          <IconEdit className='h-4 w-4'/>
        </button>
        {isEditing && (
          <button onClick={async () => { setIsEditing(false); await editPost(postId, newContent); setNewContent(newContent) }}>
            Guardar
          </button>
        )}
      </CardFooter>
    </Card>
  )
}
