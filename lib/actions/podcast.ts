'use server'

import { createClient } from '@/lib/supabase/server'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

type ActionState = { error?: string } | null

export async function createPodcast(
  prevState: ActionState,
  formData: FormData
): Promise<ActionState> {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return { error: 'You must be signed in.' }

  const title = (formData.get('title') as string)?.trim()
  const description = (formData.get('description') as string)?.trim()
  const youtubeLink = (formData.get('youtube_link') as string)?.trim()
  const duration = (formData.get('duration') as string)?.trim()
  const episodeNumberRaw = formData.get('episode_number') as string
  const published = formData.get('published') === 'on'
  const coverFile = formData.get('cover') as File

  if (!title) return { error: 'Title is required.' }
  if (!youtubeLink) return { error: 'YouTube link is required.' }

  let coverImageUrl: string | null = null
  if (coverFile && coverFile.size > 0) {
    const path = `${user.id}/${Date.now()}-${coverFile.name}`
    const { error: uploadError } = await supabase.storage
      .from('blog-images')
      .upload(path, coverFile)
    if (uploadError) return { error: `Image upload failed: ${uploadError.message}` }
    coverImageUrl = supabase.storage.from('blog-images').getPublicUrl(path).data.publicUrl
  }

  const { error } = await supabase.from('podcasts').insert({
    user_id: user.id,
    title,
    description: description || null,
    youtube_link: youtubeLink,
    duration: duration || null,
    episode_number: episodeNumberRaw ? Number(episodeNumberRaw) : null,
    cover_image_url: coverImageUrl,
    published,
  })

  if (error) return { error: error.message }

  revalidatePath('/admin/podcasts')
  redirect('/admin/podcasts')
}

export async function updatePodcast(
  id: string,
  prevState: ActionState,
  formData: FormData
): Promise<ActionState> {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return { error: 'You must be signed in.' }

  const title = (formData.get('title') as string)?.trim()
  const description = (formData.get('description') as string)?.trim()
  const youtubeLink = (formData.get('youtube_link') as string)?.trim()
  const duration = (formData.get('duration') as string)?.trim()
  const episodeNumberRaw = formData.get('episode_number') as string
  const published = formData.get('published') === 'on'
  const coverFile = formData.get('cover') as File

  if (!title) return { error: 'Title is required.' }
  if (!youtubeLink) return { error: 'YouTube link is required.' }

  const updates: Record<string, unknown> = {
    title,
    description: description || null,
    youtube_link: youtubeLink,
    duration: duration || null,
    episode_number: episodeNumberRaw ? Number(episodeNumberRaw) : null,
    published,
    updated_at: new Date().toISOString(),
  }

  if (coverFile && coverFile.size > 0) {
    const path = `${user.id}/${Date.now()}-${coverFile.name}`
    const { error: uploadError } = await supabase.storage
      .from('blog-images')
      .upload(path, coverFile)
    if (uploadError) return { error: `Image upload failed: ${uploadError.message}` }
    updates.cover_image_url = supabase.storage.from('blog-images').getPublicUrl(path).data.publicUrl
  }

  const { error } = await supabase.from('podcasts').update(updates).eq('id', id)
  if (error) return { error: error.message }

  revalidatePath('/admin/podcasts')
  redirect('/admin/podcasts')
}

export async function deletePodcast(id: string) {
  const supabase = await createClient()
  const { error } = await supabase.from('podcasts').delete().eq('id', id)
  if (error) throw new Error(error.message)
  revalidatePath('/admin/podcasts')
}