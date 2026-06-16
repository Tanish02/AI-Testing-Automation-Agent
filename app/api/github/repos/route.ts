import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

export async function GET() {
  const cookieStore = await cookies()
  const token = cookieStore.get('gh_token')?.value

  if (!token) {
    return new Response(JSON.stringify({ error: 'Github Token not found' }), {
      status: 401,
    })
  }
  const allRepos = []
  let pages = 1
  while (true) {
    const res = await fetch(
      `https://api.github.com/user/repos?per_page=100&page=${pages}&sort=updated`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: 'application/vnd.github+json',
        },
        // console.log('fetching pages:', pages)
      }
    )
    const repos = await res.json()
    if (!repos.length) break
    allRepos.push(...repos)
    pages++
  }
  // console.log (allRepos[0])
  return NextResponse.json(
    allRepos.map((r) => ({
      id: r.id,
      name: r.name,
      full_name: r.full_name,
      private_: r.private,
      html_url: r.html_url,
      description: r.description,
      updated_at: r.updated_at,
      language: r.language,
      owner: r.owner.login,
      default_branch: r.default_branch,
    }))
  )
}

// end code
// add repos endpoint
