import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = 'https://omjsdyplytwjrbesgyws.supabase.co'
const SUPABASE_ANON_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9tanNkeXBseXR3anJiZXNneXdzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTMxNzI5ODMsImV4cCI6MjAyODc0ODk4M30.84TCYlaGVRtxwpkgoK_MVBISdPDxQpoHPPG2eVLVVQ8'

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
