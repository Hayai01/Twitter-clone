'use client'
import { useState } from 'react'
import { Card, CardHeader, CardBody, CardFooter, Avatar } from '@nextui-org/react'
import Link from 'next/link'
import { IconHeart, IconMessageCircle2, IconRepeat, IconTrash, IconCheck, IconEdit } from '@tabler/icons-react'
import { deletePost } from '../scripts/delete-post'
import { editPost } from '../scripts/edit-posts'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism'

export default function PostCard ({
  postId,
  userFullName,
  userName,
  avatarUrl,
  content,
  tittle
}: {
  postId: string
  userFullName: string
  userName: string
  avatarUrl: string
  content: string
  tittle: string
}) {
  const [isEditing, setIsEditing] = useState(false)
  const [newContent, setNewContent] = useState(content)

  return (
    <Card className="shadow-none bg-transparente hover:bg-slate-800 transition border-b rounded-none border-white/20 ">
    <CardHeader className="justify-between">
      <div className="flex gap-2">
        <Link href={`/${userName}`}>
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
        <>
          <h3 className="text-lg font-semibold mb-2">{tittle}</h3> {/* Mostrar el título con más espacio */}
          <SyntaxHighlighter language="typescript" style={atomDark}>
          {newContent}
          </SyntaxHighlighter>
        </>
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
          <IconCheck className='h-4 w-4'/>
        </button>
      )}
    </CardFooter>
  </Card>
  )
}
