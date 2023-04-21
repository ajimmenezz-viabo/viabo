import { useQueryClient } from '@tanstack/react-query'

export const useGetQueryData = key => {
  const queryClient = useQueryClient()
  return queryClient.getQueryData(key)
}
