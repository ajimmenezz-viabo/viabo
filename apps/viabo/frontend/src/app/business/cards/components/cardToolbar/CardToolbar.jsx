import { Button, Stack, Toolbar, Typography } from '@mui/material'
import { Message, PriceChange } from '@mui/icons-material'
import MailCompose from '@/app/business/cards/components/cardToolbar/MailCompose'
import { useState } from 'react'
import { TransferSideBar } from '@/app/business/cards/components/transfer'
import { useCommerceDetailsCard } from '@/app/business/cards/store'

export function CardToolbar() {
  const [openCompose, setOpenCompose] = useState(false)
  const [openTransferBin, setOpenTransferBin] = useState(false)
  const mainCard = useCommerceDetailsCard(state => state.mainCard)

  return (
    <>
      <Toolbar
        sx={theme => ({
          position: 'sticky',
          borderRadius: 1,
          py: 4,
          mt: 2,
          top: 0,
          boxShadow: theme.customShadows.z8,
          backgroundColor: theme.palette.info.lighter,
          color: 'white'
        })}
      >
        <Stack
          flexDirection={{ xs: 'column', md: 'row' }}
          justifyContent="space-between"
          sx={{ width: 1 }}
          gap={2}
          alignItems={'center'}
        >
          <Typography variant="subtitle2" color="info.main">
            Acciones:
          </Typography>
          <Stack flexDirection={'row'} gap={2} justifyContent="space-between">
            <Button
              startIcon={<Message />}
              variant={'outlined'}
              color={'info'}
              onClick={() => {
                setOpenCompose(true)
                setOpenTransferBin(false)
              }}
            >
              Mensaje
            </Button>
            {mainCard && (
              <Button
                startIcon={<PriceChange />}
                variant={'outlined'}
                color={'info'}
                onClick={() => {
                  setOpenTransferBin(true)
                  setOpenCompose(false)
                }}
              >
                Fondear
              </Button>
            )}
          </Stack>
        </Stack>
      </Toolbar>
      <MailCompose isOpenCompose={openCompose} onCloseCompose={() => setOpenCompose(false)} />
      <TransferSideBar open={openTransferBin} setOpen={setOpenTransferBin} isBinCard={true} />
    </>
  )
}
