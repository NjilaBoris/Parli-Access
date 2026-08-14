import { StatsCards } from '@/components/Stat'
import { createClient } from '@/lib/supabase/server'


export default async function AdminDashboardPage() {
  const supabase = await createClient()

  const [{ count: blogCount }, { count: newsCount }, { count: userCount }, { count: publishedBlog }] =
    await Promise.all([
      supabase.from('blog_posts').select('*', { count: 'exact', head: true }),
      supabase.from('news_posts').select('*', { count: 'exact', head: true }),
      supabase.from('profiles').select('*', { count: 'exact', head: true }),
      supabase.from('blog_posts').select('*', { count: 'exact', head: true }).eq('published', true),
    ])

  const stats = [
    { label: 'Blog posts', value: String(blogCount ?? 0) },
    { label: 'News stories', value: String(newsCount ?? 0) },
    { label: 'Total users', value: String(userCount ?? 0) },
    { label: 'Published blog posts', value: String(publishedBlog ?? 0) },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-ink sm:text-3xl">Dashboard</h1>
        <p className="mt-1 text-sm text-slate-500">Overview of your blog and news content.</p>
      </div>
      <StatsCards stats={stats} />
    </div>
  )
}