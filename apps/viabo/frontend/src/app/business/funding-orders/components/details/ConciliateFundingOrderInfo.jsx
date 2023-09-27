import { Box, Stack, Typography } from '@mui/material'
import { BiBlock } from 'react-icons/bi'
import { BsPatchCheck } from 'react-icons/bs'

import { useFundingOrderStore } from '../../store'

export const ConciliateFundingOrderInfo = () => {
  const fundingOrder = useFundingOrderStore(state => state.fundingOrder)

  return (
    <Stack spacing={2}>
      <Typography variant={'subtitle1'} fontWeight={'bold'}>
        Conciliación
      </Typography>
      <Stack spacing={2}>
        <Stack flexDirection={'row'} gap={1}>
          <Stack spacing={0.5}>
            <Typography paragraph variant="overline" sx={{ color: 'text.disabled' }}>
              ¿Conciliada?
            </Typography>
            <Box textAlign={'center'}>
              {fundingOrder?.conciliated ? (
                <BsPatchCheck color="green" fontWeight={'bold'} fontSize={'20px'} />
              ) : (
                <BiBlock fontSize={'20px'} color="red" />
              )}
            </Box>
          </Stack>
          <Box display={'flex'} flex={1} />
          <Stack flexGrow={1} spacing={0.5}>
            <Typography paragraph variant="overline" sx={{ color: 'text.disabled' }}>
              Movimiento
            </Typography>
            <Typography variant="body2">{'-'}</Typography>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  )
}
