import { lazy } from 'react'

import { Add } from '@mui/icons-material'
import { Avatar, Box, Card, CardHeader, IconButton, Stack, Tooltip, Typography } from '@mui/material'

import { useSpeiThirdAccounts } from '../../../third-accounts/store'
import { beneficiaresMock } from '../services'

import { Lodable } from '@/shared/components/lodables'
import { Scrollbar } from '@/shared/components/scroll'
import { cssStyles } from '@/theme/utils'

const NewSpeiThirdAccountDrawer = Lodable(
  lazy(() => import('../../../third-accounts/components/new-third-account/NewSpeiThirdAccountDrawer'))
)

const CommerceSpeiBeneficiaries = () => {
  const _bankingContacts = []

  const { setOpenNewSpeiThirdAccount } = useSpeiThirdAccounts()

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
              <IconButton color="primary" size="large" onClick={() => setOpenNewSpeiThirdAccount(true)}>
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
      <NewSpeiThirdAccountDrawer />
    </>
  )
}

export default CommerceSpeiBeneficiaries
