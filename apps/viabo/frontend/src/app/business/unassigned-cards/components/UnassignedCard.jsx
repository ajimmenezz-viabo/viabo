import { Checkbox, Stack, Typography } from '@mui/material'
import { motion } from 'framer-motion'

import { useUnassignedCards } from '@/app/business/unassigned-cards/store'
import { CardCVV, CardNumber, CardStyled } from '@/app/shared/components/card'

export default function UnassignedCard({ card }) {
  const setSelectedCard = useUnassignedCards(state => state.setSelectedCard)
  const cardsSelected = useUnassignedCards(state => state.cards)

  const isSelected = cardsSelected?.some(cardSelected => cardSelected?.id === card?.id)

  const handleSelectCard = e => {
    e.stopPropagation()
    setSelectedCard(card)
  }

  return (
    <motion.div onClick={handleSelectCard} whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.8 }}>
      <CardStyled sx={{ m: 1, cursor: 'pointer' }}>
        <Stack flexDirection={'row'} gap={1}>
          <Checkbox
            onClick={handleSelectCard}
            edge="start"
            checked={isSelected}
            inputProps={{ 'aria-labelledby': card?.id }}
            color={'success'}
          />
          <Stack>
            <Typography variant={'subtitle2'} sx={{ opacity: 0.72 }}>
              Viabo Card
            </Typography>
            <Typography variant={'caption'} color={'text.secondary'}>
              {card?.register}
            </Typography>
          </Stack>
        </Stack>

        <CardNumber card={card} disableShow />

        <Stack direction="row" spacing={5}>
          <Stack>
            <Typography sx={{ mb: 1, typography: 'caption', opacity: 0.48 }}>Vencimiento</Typography>
            <Typography sx={{ typography: 'subtitle1' }}>{card?.expiration}</Typography>
          </Stack>
          <CardCVV card={card} disableShow />
        </Stack>
      </CardStyled>
    </motion.div>
  )
}
