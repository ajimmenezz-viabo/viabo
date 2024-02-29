import { Button, Card, alpha, styled } from '@mui/material'

export const CardViaboSpeiStyle = styled(Card)(({ theme }) => ({
  borderColor: alpha('#CFDBD5', 0.7),
  borderRadius: Number(theme.shape.borderRadius),
  boxShadow: 'none',
  backgroundColor: 'transparent'
}))

export const ButtonViaboSpei = styled(Button)(({ theme }) => ({
  borderColor: alpha('#CFDBD5', 0.7),
  borderRadius: Number(theme.shape.borderRadius),
  boxShadow: 'none',
  backgroundColor: 'transparent'
}))
