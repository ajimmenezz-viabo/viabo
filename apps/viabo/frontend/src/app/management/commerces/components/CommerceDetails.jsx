import { lazy } from 'react'

import { Stack, Typography } from '@mui/material'

import { useCommerce } from '@/app/management/commerces/store'
import { RightPanel } from '@/app/shared/components'
import { Lodable } from '@/shared/components/lodables'
import { Scrollbar } from '@/shared/components/scroll'

const GeneralInfoForm = Lodable(lazy(() => import('./details/GeneralInfoForm')))

function CommerceDetails() {
  const { setCommerce, setOpenDetailsCommerce } = useCommerce(state => state)
  const openDetailsCommerce = useCommerce(state => state.openDetailsCommerce)
  const commerce = useCommerce(state => state.commerce)

  const handleClose = () => {
    setOpenDetailsCommerce(false)
    setCommerce(null)
  }

  return (
    <RightPanel
      open={openDetailsCommerce}
      handleClose={handleClose}
      titleElement={
        <Stack>
          <Typography variant={'h6'}>Editar Comercio</Typography>
        </Stack>
      }
    >
      <Scrollbar containerProps={{ sx: { flexGrow: 0, height: 'auto' } }}>
        {openDetailsCommerce && <GeneralInfoForm commerce={commerce} onSuccess={handleClose} />}
      </Scrollbar>
    </RightPanel>
  )
}

export default CommerceDetails
