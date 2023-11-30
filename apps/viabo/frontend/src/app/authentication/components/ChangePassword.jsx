import { lazy, useState } from 'react'

import PropTypes from 'prop-types'

import { WarningAmberOutlined } from '@mui/icons-material'
import { Stack, Typography } from '@mui/material'

import { useSendValidationCode } from '@/app/business/shared/hooks'
import { RightPanel } from '@/app/shared/components'
import { Lodable } from '@/shared/components/lodables'
import { ModalAlert } from '@/shared/components/modals'
import { Scrollbar } from '@/shared/components/scroll'

const ChangePasswordForm = Lodable(lazy(() => import('./ChangePasswordForm')))

const ChangePassword = ({ open, setOpen }) => {
  const [openPasswordForm, setOpenPasswordForm] = useState(false)
  const { mutate, isLoading } = useSendValidationCode()

  const handleClose = () => {
    setOpen(false)
  }

  const handleCloseForm = () => {
    setOpenPasswordForm(false)
  }

  const handleConfirmChangePassword = () => {
    mutate(
      {},
      {
        onSuccess: () => {
          setOpen(false)
          setOpenPasswordForm(true)
        }
      }
    )
  }

  return (
    <>
      <ModalAlert
        title={'Cambiar Contraseña'}
        typeAlert="warning"
        textButtonSuccess="Continuar"
        onClose={handleClose}
        open={open}
        isSubmitting={isLoading}
        description={
          <Stack spacing={2}>
            <Stack direction={'row'} alignItems={'center'} spacing={1}>
              <WarningAmberOutlined />
              <Typography variant={'caption'}>¿Está seguro de cambiar la contraseña?</Typography>
            </Stack>
          </Stack>
        }
        onSuccess={handleConfirmChangePassword}
        fullWidth
        maxWidth="xs"
      />
      <RightPanel
        open={openPasswordForm}
        handleClose={handleCloseForm}
        titleElement={
          <Stack>
            <Typography variant={'h6'}>Cambiar Contraseña</Typography>
          </Stack>
        }
      >
        <Scrollbar containerProps={{ sx: { flexGrow: 0, height: 'auto' } }}>
          {openPasswordForm && <ChangePasswordForm onSuccess={handleCloseForm} />}
        </Scrollbar>
      </RightPanel>
    </>
  )
}

ChangePassword.propTypes = {
  open: PropTypes.any,
  setOpen: PropTypes.any
}

export default ChangePassword
