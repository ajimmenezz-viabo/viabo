import { Stack } from '@mui/material'
import { CommerceCardsList } from '@/app/business/cards/components/CommerceCardsList'
import { CommerceViaboCardDetails } from '@/app/business/cards/components/CommerceViaboCardDetails'

export function CommerceCardsLayout() {
  return (
    <Stack flexDirection={'row'} sx={{ height: '100vh', display: 'flex' }}>
      <CommerceCardsList />
      <CommerceViaboCardDetails />
    </Stack>
  )
}
