import { Stack } from '@mui/material'
import { CommerceViaboCardDetails } from '@/app/business/cards/components/CommerceViaboCardDetails'
import { CardsSidebar } from '@/app/business/cards/components/cardsSidebar'

export function CommerceCardsLayout() {
  return (
    <Stack flexDirection={'row'} sx={{ height: '99vh', display: 'flex' }}>
      <CardsSidebar />
      <CommerceViaboCardDetails />
    </Stack>
  )
}
