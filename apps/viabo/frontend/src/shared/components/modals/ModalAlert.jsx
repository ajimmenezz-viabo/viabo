import PropTypes from 'prop-types'

import LoadingButton from '@mui/lab/LoadingButton'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'

ModalAlert.propTypes = {
  onClose: PropTypes.func,
  onSuccess: PropTypes.func,
  open: PropTypes.bool,
  isSubmitting: PropTypes.bool,
  title: PropTypes.string,
  description: PropTypes.node,
  textButtonSuccess: PropTypes.string,
  textButtonCancel: PropTypes.string,
  typeAlert: PropTypes.oneOf(['primary', 'secondary', 'success', 'error', 'info', 'warning'])
}

export function ModalAlert(props) {
  const {
    title,
    description,
    typeAlert,
    textButtonSuccess,
    textButtonCancel = 'Cancelar',
    isSubmitting,
    open,
    onClose,
    onSuccess,
    ...rest
  } = props

  const handleClose = (event, reason) => {
    if (reason && reason === 'backdropClick') return
    if (reason && reason === 'escapeKeyDown') return
    onClose()
  }

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      sx={{
        '& .MuiDialog-paper': {
          color: theme => theme.palette[typeAlert].darker,
          bgcolor: theme => theme.palette[typeAlert].lighter
        }
      }}
      {...rest}
    >
      <DialogTitle sx={{ paddingBottom: 2 }} id="alert-dialog-title">
        {title}
      </DialogTitle>
      <DialogContent sx={{ paddingBottom: 0 }}>{description}</DialogContent>
      <DialogActions>
        {!isSubmitting && (
          <Button variant="outlined" color="inherit" onClick={handleClose}>
            {textButtonCancel}
          </Button>
        )}

        <LoadingButton onClick={onSuccess} color={typeAlert} loading={isSubmitting} variant="contained">
          {textButtonSuccess}
        </LoadingButton>
      </DialogActions>
    </Dialog>
  )
}
