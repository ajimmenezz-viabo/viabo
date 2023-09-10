import { useState } from 'react'

import { Update } from '@mui/icons-material'
import { Box, Button, Card, CardHeader, Divider, Stack, Typography } from '@mui/material'

import { FundingGlobalCard } from '@/app/business/dashboard-master/components/FundingGlobalCard'
import { useFindGlobalCards } from '@/app/business/dashboard-master/hooks'
import { useMasterGlobalStore } from '@/app/business/dashboard-master/store'
import { CardBalance } from '@/app/business/viabo-card/cards/components/details'
import { getCardTypeByName } from '@/app/shared/services'
import { Scrollbar } from '@/shared/components/scroll'

export function MasterGlobalCards() {
  const { data } = useFindGlobalCards()
  const [view, setView] = useState('1')
  const card = useMasterGlobalStore(state => state.card)
  const setGlobalCard = useMasterGlobalStore(state => state.setGlobalCard)

  const master = data?.master
  const globals = data?.globals

  return (
    <Stack spacing={2} flex={1}>
      <Card
        sx={{
          p: 0
        }}
      >
        <CardHeader
          title={
            <Stack flexDirection={'row'} gap={1} alignItems={'center'}>
              <Typography variant="subtitle2">Global [Master]</Typography>
            </Stack>
          }
          sx={{ px: 2, py: 2 }}
        />

        <Stack alignItems={'center'} pb={2} px={2}>
          <Stack direction={'row'} alignItems={'center'} spacing={1}>
            <Typography variant="h3">{master?.balanceFormatted}</Typography>
            <Typography variant="caption">MXN</Typography>
          </Stack>

          <Stack direction={'row'} alignItems={'center'} spacing={1}>
            <Update sx={{ width: 30, height: 30, color: 'text.secondary' }} />

            <Stack alignItems={'center'}>
              <Typography variant={'subtitle2'}>En transito</Typography>

              <Stack direction={'row'} spacing={1} alignItems={'center'}>
                <Typography variant="body1">{master?.inTransitFormatted}</Typography>
                <Typography variant="caption">MXN</Typography>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Card>

      <Box>
        <Scrollbar>
          <Stack direction={{ xs: 'column', md: 'row' }} spacing={2} pb={2}>
            {globals?.map(card => {
              const cardLogo = getCardTypeByName(card?.paymentProcessor)
              const CardLogoComponent = cardLogo?.component
              return (
                <Stack key={card?.cardId} flexGrow={1} position={'relative'}>
                  <Card sx={{ minWidth: { xs: 300, md: 'auto' } }}>
                    <CardHeader
                      title={
                        <Stack flexDirection={'row'} gap={1} alignItems={'center'} justifyContent={'space-between'}>
                          <Typography variant="caption">{card?.paymentProcessor}</Typography>
                          {cardLogo && <CardLogoComponent sx={{ width: 30, height: 30 }} />}
                        </Stack>
                      }
                      sx={{ px: 2, py: 2 }}
                    />

                    <Stack alignItems={'center'} pb={2} px={2}>
                      <Stack direction={'row'} alignItems={'center'} spacing={1}>
                        <Typography variant="h6">{card?.balanceFormatted}</Typography>
                        <Typography variant="caption">MXN</Typography>
                      </Stack>

                      <Stack direction={'row'} alignItems={'center'} spacing={1}>
                        <Update sx={{ width: 20, height: 20, color: 'text.secondary' }} />

                        <Stack alignItems={'center'}>
                          <Typography variant={'subtitle2'}>En transito</Typography>

                          <Stack direction={'row'} spacing={1} alignItems={'center'}>
                            <Typography variant="body2">{card?.inTransitFormatted}</Typography>
                            <Typography variant="caption">MXN</Typography>
                          </Stack>
                        </Stack>
                      </Stack>
                    </Stack>

                    <Divider sx={{ borderStyle: 'dashed' }} />
                    <Stack px={2} py={1} flexDirection={'row'} justifyContent={'space-between'}>
                      <Button
                        onClick={() => {
                          setView('1')
                          setGlobalCard(card)
                        }}
                      >
                        Balance
                      </Button>
                      <Button
                        onClick={() => {
                          setView('2')
                          setGlobalCard(card)
                        }}
                      >
                        Fondeo
                      </Button>
                    </Stack>
                  </Card>
                </Stack>
              )
            })}
          </Stack>
        </Scrollbar>
      </Box>

      {view === '1' && (
        <CardBalance card={card} title={card ? `Balance ${card?.paymentProcessor?.toLowerCase()}` : 'Balance Master'} />
      )}
      {view === '2' && card && <FundingGlobalCard />}
    </Stack>
  )
}
