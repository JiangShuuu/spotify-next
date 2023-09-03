import { createServerActionClient } from '@supabase/auth-helpers-nextjs'
import { Song } from '~/types'
import { cookies } from 'next/headers'

const getSongs = async (): Promise<Song[]> => {
  const supabase = createServerActionClient({
    cookies: cookies,
  })

  const { data, error } = await supabase
    .from('songs')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) {
    console.log(error)
  }

  return (data as any) || []
}

export default getSongs
