import { motion } from 'framer-motion'
import { Label } from '@/shared/components/form'
import { Box } from '@mui/material'
import { useCommerceDetailsCard } from '@/app/business/cards/store'
import { RequestLoadingComponent } from '@/shared/components/loadings'
import { ErrorRequestPage } from '@/shared/components/notifications'
import { getAvatarColor } from '@theme/utils'

export function CommerceCardTypes({ cardTypes, isLoading, isError, refetch }) {
  const setCardTypeSelected = useCommerceDetailsCard(state => state.setCardTypeSelected)
  const cardTypeSelected = useCommerceDetailsCard(state => state.cardTypeSelected)
  const handleChangeCardType = cardType => {
    setCardTypeSelected(cardType?.id)
  }

  return (
    <Box display="flex">
      {isLoading && <RequestLoadingComponent />}
      {isError && !isLoading && (
        <ErrorRequestPage errorMessage={'No existen tipos de tarjetas para este comercio'} handleButton={refetch} />
      )}
      {!isLoading &&
        cardTypes?.map(cardType => {
          const selected = cardTypeSelected === cardType?.id
          return (
            <motion.div
              key={cardType?.id}
              onClick={() => handleChangeCardType(cardType)}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.8 }}
            >
              <Label
                variant={selected ? 'ghost' : 'filled'}
                color={getAvatarColor(cardType?.name || 'inherit')}
                sx={{
                  textTransform: 'uppercase',
                  marginRight: 1,
                  marginBottom: 2,
                  cursor: 'pointer',
                  border: selected ? 3 : 0,
                  borderColor: selected ? theme => theme.palette.primary.main : 'inherit'
                }}
              >
                {cardType?.name}
              </Label>
            </motion.div>
          )
        })}
    </Box>
  )
}