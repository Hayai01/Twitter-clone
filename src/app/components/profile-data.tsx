'use client'
import { Card, CardHeader, CardBody, CardFooter, Avatar, Button } from '@nextui-org/react'
import { useRouter } from 'next/navigation'

export default function ProfileData ({
  userFullName,
  userName,
  avatarUrl
}: {
  userFullName: string
  userName: string
  avatarUrl: string
}) {
  const router = useRouter()

  const redirectToMainPage = () => {
    router.push('/')
  }

  return (
    <div className="container mx-auto p-4">
    <Card className="bg-black-800">
      <CardHeader>
        <Avatar src={avatarUrl} />
        <span className="ml-4 text-xl font-bold text-white-800">{userFullName}</span>
      </CardHeader>
      <CardBody>
        <div className="mb-4">
          <label className="block mb-1 font-bold text-white-600">Username</label>
          <input type="text" className="w-full p-2 border border-white-300 rounded bg-white-100" value={userName} readOnly />
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-bold text-white-600">Name</label>
          <input type="text" className="w-full p-2 border border-white-300 rounded bg-white-100" value={userFullName} readOnly />
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-bold text-white-600">Loged With</label>
          <input type="text" className="w-full p-2 border border-white-300 rounded bg-white-100" value="GitHub" readOnly />
        </div>
      </CardBody>
      <CardFooter>
      <Button className="border-2 border-solid rounded-lg bg-transparent hover:bg-primary hover:text-white"onClick={redirectToMainPage}disabled={false}>
      Go to Main Page
        </Button>
      </CardFooter>
    </Card>
  </div>
  )
}
