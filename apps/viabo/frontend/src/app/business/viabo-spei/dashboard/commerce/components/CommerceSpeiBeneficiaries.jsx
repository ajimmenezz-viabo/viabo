import { useState } from 'react'

import { Add } from '@mui/icons-material'
import { Avatar, Box, Card, CardHeader, IconButton, Stack, Tooltip, Typography } from '@mui/material'

import NewBeneficiaryDrawer from './NewBeneficiaryDrawer'

import { beneficiaresMock } from '../services'

import { Scrollbar } from '@/shared/components/scroll'
import { cssStyles } from '@/theme/utils'

const CommerceSpeiBeneficiaries = () => {
  const _bankingContacts = []

  const [open, setOpen] = useState()

  return (
    <>
      <Card variant="outlined" sx={theme => ({ ...cssStyles(theme).bgBlur({ blur: 20 }), backgroundColor: 'inherit' })}>
        <CardHeader
          sx={theme => ({
            pb: 2
          })}
          title="Beneficiarios"
          subheader={`Tienes ${beneficiaresMock?.length || 0} beneficiarios`}
          action={
            <Tooltip title="Nuevo Beneficiario">
              <IconButton color="primary" size="large" onClick={() => setOpen(true)}>
                <Add />
              </IconButton>
            </Tooltip>
          }
        />

        <Scrollbar sx={{ maxHeight: 400 }}>
          <Stack spacing={3} sx={{ p: 3, pt: 0 }}>
            {beneficiaresMock.map(contact => (
              <Stack direction="row" alignItems="center" key={contact.id}>
                <Avatar src={contact.avatar} sx={{ width: 48, height: 48 }} />
                <Box sx={{ flexGrow: 1, ml: 2, minWidth: 100 }}>
                  <Typography variant="subtitle2" sx={{ mb: 0.5 }} noWrap>
                    {contact.name}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }} noWrap>
                    {contact.bank}
                  </Typography>
                </Box>
              </Stack>
            ))}
          </Stack>
        </Scrollbar>
      </Card>
      <NewBeneficiaryDrawer open={open} setOpen={setOpen} />
    </>
  )
}

export default CommerceSpeiBeneficiaries
