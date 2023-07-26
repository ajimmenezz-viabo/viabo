import { CreditCard } from '@mui/icons-material'
import { Chip, Stack } from '@mui/material'

import { FormAssignCards } from '@/app/business/unassigned-cards/components/FormAssignCards'
import { useUnassignedCards } from '@/app/business/unassigned-cards/store'
import { RightPanel } from '@/app/shared/components'

export function AssignCardsSidebar({ open, handleClose, handleSuccess }) {
  const cardsSelected = useUnassignedCards(state => state.cards)

  return (
    <RightPanel
      open={open}
      handleClose={handleClose}
      title={cardsSelected?.length === 1 ? 'Asociar Tarjeta' : 'Asociar Tarjetas'}
    >
      <Stack
        flexDirection={'row'}
        gap={2}
        flexWrap={'wrap'}
        justifyContent={'center'}
        alignItems={'center'}
        px={3}
        pt={3}
      >
        {cardsSelected?.map(card => (
          <Chip key={card?.id} icon={<CreditCard />} label={card?.cardNumberHidden} />
        ))}
      </Stack>
      <FormAssignCards cards={cardsSelected} onSuccess={handleSuccess} />
    </RightPanel>
  )
}
