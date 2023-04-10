import { useMutation, useQueryClient } from '@tanstack/react-query'
import { deleteDocuments } from '@/app/business/commerce/services'
import { COMMERCE_KEYS } from '@/app/business/commerce/adapters'

export const useDeleteDocuments = (options = {}) => {
  const client = useQueryClient()
  return useMutation({
    mutationFn: deleteDocuments,
    onSuccess: () => {
      client.invalidateQueries([COMMERCE_KEYS.COMMERCE_PROCESS])
    },
    ...options
  })
}
