import { useState } from 'react'

import PropTypes from 'prop-types'

import { Check, CheckCircle, CopyAll } from '@mui/icons-material'
import LinkIcon from '@mui/icons-material/Link'
import { IconButton, Link, Stack, Typography } from '@mui/material'
import { format } from 'date-fns'
import { es } from 'date-fns/locale'
import { Link as RouterLink } from 'react-router-dom'

import { PaymentLinkForm } from './PaymentLinkForm'

import { RightPanel } from '@/app/shared/components'
import { copyToClipboard, fCurrency } from '@/shared/utils'

const PaymentLinkModal = ({ open, setOpen }) => {
  const [payLink, setPayLink] = useState(null)
  const [copied, setCopied] = useState(false)
  const path = `${window.location.host}/cobro/${payLink?.id}`

  const handleClose = () => {
    setOpen(false)
    setPayLink(null)
  }

  return (
    <RightPanel
      open={open}
      handleClose={handleClose}
      title={'Liga de Pago'}
      onSuccess={paylink => {
        setPayLink(paylink)
      }}
    >
      {payLink ? (
        <Stack flexDirection="column" alignItems={'center'} justifyContent={'space-between'} spacing={2} p={5}>
          <Stack flexDirection="column" alignItems={'center'} spacing={2}>
            <CheckCircle sx={{ width: 40, height: 40 }} color={'success'} />
            <Typography textAlign={'center'} variant="subtitle2">
              Comparte la siguiente liga de pago para realizar el cobro por:
            </Typography>
            <Stack direction={'row'} spacing={1} alignItems={'center'}>
              <Typography variant="h3"> {fCurrency(payLink.amount)}</Typography>
              <Typography variant="caption">MXN</Typography>
            </Stack>
          </Stack>
          <Stack flexDirection="column" alignItems={'center'} justifyContent={'space-between'} spacing={0}>
            <Stack justifyContent={'center'} alignItems={'center'} direction="row" spacing={1}>
              <LinkIcon />
              <Link component={RouterLink} underline="always" to={path} href={path} target="_blank" color="info.main">
                {path}
              </Link>
              <IconButton
                variant="outlined"
                size="small"
                color={copied ? 'success' : 'inherit'}
                onClick={() => {
                  setCopied(true)
                  copyToClipboard(path)
                  setTimeout(() => {
                    setCopied(false)
                  }, 1000)
                }}
              >
                {copied ? <Check sx={{ color: 'success' }} /> : <CopyAll sx={{ color: 'text.disabled' }} />}
              </IconButton>
            </Stack>
          </Stack>
          <Typography variant="caption" color={'text.disabled'}>
            {format(new Date(), 'dd MMM yyyy hh:mm a', { locale: es })}
          </Typography>
        </Stack>
      ) : (
        <PaymentLinkForm
          onSuccess={link => {
            setPayLink(link)
          }}
        />
      )}
    </RightPanel>
  )
}

export default PaymentLinkModal

PaymentLinkModal.propTypes = {
  open: PropTypes.any,
  setOpen: PropTypes.func
}
