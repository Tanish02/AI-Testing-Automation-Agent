import { db } from '@/db'
import { TestCasesTable } from '@/db/schema'
import { eq } from 'drizzle-orm'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
  const searchparama = new URL(req.url).searchParams
  const repoId = searchparama.get('repoId')

  if (!repoId) {
    return NextResponse.json({ error: 'repoId is required' }, { status: 400 })
  }
  const result = await db.select().from(TestCasesTable).where(eq(TestCasesTable.repoId, repoId))
  return NextResponse.json(result)
}

//end code
