import { useAuth } from '@/shared/hooks/useAuth'

export function useUser() {
  const auth = useAuth()
  console.log(auth)
  return auth?.user || null
}
