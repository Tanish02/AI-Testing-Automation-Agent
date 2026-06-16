'use client'
import { UserDetailContext } from '@/context/UserDetailContext'
import axios from 'axios'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useContext, useEffect, useState } from 'react'
import { Button } from '../ui/button'
import { Card, CardContent } from '../ui/card'
import EmptyWorkspace from './EmptyWorkspace'
import RepoDialog from './RepoDialog'
import UserRepoList from './UserRepoList'

export type UserRepo = {
  id: number
  repoId: number
  name: string
  fullName: string
  private: boolean
  htmlUrl: string
  description: string
  userId: number
  language: string
  updatedAt: string
  defaultBranch: string
  owner: string
}

function WorkspaceBody() {
  // const cookieStore = await cookies()
  // const token = cookieStore.get('gh_token')?.value

  const { userDetail } = useContext(UserDetailContext)
  const router = useRouter()
  const [token, setToken] = useState('')

  const [userRepoList, setUserRepoList] = useState<UserRepo[]>([])
  useEffect(() => {
    GetGithubUserToken()
  }, [])

  useEffect(() => {
    userDetail && GetUserAddedRepoList()
  }, [userDetail])

  const GetGithubUserToken = async () => {
    const result = await axios.get('/api/github/token')
    console.log(result.data.token)
    setToken(result.data.token)
  }
  // TODO: On Add Repo click -> connect to github and add repo to db
  const OnAddRepo = async () => {
    router.push('/api/github')
  }
  // fetching repo from DB not github
  const GetUserAddedRepoList = async () => {
    const result = await axios.get('/api/user-repo?userId=' + userDetail?.id)
    console.log(result.data)
    setUserRepoList(result.data)
  }
  //===================
  return (
    <div>
      <div className="flex justify-between items-center">
        <h2 className="text-4xl font-medium">Workspace</h2>
        <h2 className="text-blue-800 bg-blue-100 px-2 rounded-lg">
          Remaining Credits:{userDetail?.credits}
        </h2>
      </div>
      <Card className={'mt-5 flex justify-between items-center p-4 border rounded-lg '}>
        <div className="flex items-center gap-5">
          <Image src={'/github.png'} alt="github" width={45} height={45} />
          <h2 className="text-lg">Connect Github & Add Repo</h2>
        </div>
        <div>
          {!token ? (
            <Button onClick={OnAddRepo}>Setup</Button>
          ) : (
            <RepoDialog setRefreshPage={(refresh: boolean) => GetUserAddedRepoList()} />
          )}
        </div>
      </Card>

      {/* If no repo added show empty workspace */}

      {!userRepoList ? (
        <Card className="mt-10">
          <CardContent>
            <EmptyWorkspace />
          </CardContent>
        </Card>
      ) : (
        <UserRepoList repoList={userRepoList} />
      )}
    </div>
  )
}

export default WorkspaceBody
