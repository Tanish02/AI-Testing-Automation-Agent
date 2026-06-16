import { db, repositories } from '@/db'
import { eq } from 'drizzle-orm'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const {
    repoId,
    userId,
    name,
    full_name,
    private_,
    html_url,
    description,
    language,
    default_branch,
    owner,
  } = await req.json()

  //@ts-ignore
  const result = await db
    .insert(repositories)
    .values({
      repoId,
      userId,
      name,
      fullName: full_name,
      private: private_ ? 1 : 0,
      htmlUrl: html_url,
      description,
      defaultBranch: default_branch,
      language,
      owner,
    })
    .returning()
  console.log('Repository fetched Details Log:', {
    repoId,
    userId,
    name,
    full_name,
  })

  return NextResponse.json(result[0])
}

export async function GET(req: NextRequest) {
  // fetching and displaying inside workspace
  const { searchParams } = new URL(req.url)
  const userId = searchParams.get('userId')
  // const userId = Number(searchParams.get('userId'))
  const result = await db
    .select()
    .from(repositories)
    //@ts-ignore
    .where(eq(repositories.userId, userId))
  return NextResponse.json(result)
}
