import { Card, alpha, styled } from '@mui/material'

export const CardViaboSpeiStyle = styled(Card)(({ theme }) => ({
  borderColor: alpha('#CFDBD5', 0.7),
  borderRadius: Number(theme.shape.borderRadius),
  boxShadow: 'none',
  backgroundColor: 'transparent'
}))
