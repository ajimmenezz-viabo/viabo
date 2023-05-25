import { Button, Stack, Toolbar, Typography } from '@mui/material'
import { Message, PriceChange } from '@mui/icons-material'
import MailCompose from '@/app/business/cards/components/cardToolbar/MailCompose'
import { useState } from 'react'
import { TransferSideBar } from '@/app/business/cards/components/transfer'

export function CardToolbar() {
  const [openCompose, setOpenCompose] = useState(false)
  const [openTransferBin, setOpenTransferBin] = useState(false)

  return (
    <>
      <Toolbar
        sx={theme => ({
          position: 'sticky',
          borderRadius: 1,
          py: 4,
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
          </Stack>
        </Stack>
      </Toolbar>
      <MailCompose isOpenCompose={openCompose} onCloseCompose={() => setOpenCompose(false)} />
      <TransferSideBar
        open={openTransferBin}
        setOpen={setOpenTransferBin}
        isBinCard={true}
        bincardBalance={200}
        bincardId={'a1f8ec17-9a34-4e7c-82da-5a7f1deb9239'}
      />
    </>
  )
}
