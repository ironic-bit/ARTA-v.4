import { createClient } from '@supabase/supabase-js'

// Tambahkan "as string" di ujung kedua baris ini
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string

export const supabase = createClient(supabaseUrl, supabaseKey)
