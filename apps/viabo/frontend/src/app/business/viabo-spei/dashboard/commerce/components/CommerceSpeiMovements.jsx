import { AccountBalance, ArrowForwardIos, NorthEast, SouthWest } from '@mui/icons-material'
import {
  Avatar,
  Box,
  Button,
  Card,
  CardHeader,
  Divider,
  Icon,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  useTheme
} from '@mui/material'
import { format } from 'date-fns'

import { movementsMock } from '../services'

import { Label } from '@/shared/components/form'
import { Scrollbar } from '@/shared/components/scroll'
import { fCurrency } from '@/shared/utils'

const CommerceSpeiMovements = () => {
  const theme = useTheme()

  const isLight = theme.palette.mode === 'light'

  return (
    <Card>
      <CardHeader title="Movimientos Recientes" sx={{ mb: 3 }} />
      <Scrollbar>
        <TableContainer sx={{ minWidth: 720 }}>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>Clave de Rastreo</TableCell>
                <TableCell>Monto</TableCell>
                <TableCell>Concepto</TableCell>
                <TableCell>Estado</TableCell>
                <TableCell>Fecha</TableCell>
                <TableCell />
              </TableRow>
            </TableHead>
            <TableBody>
              {movementsMock?.map(row => {
                const isIncome = row?.type !== 'gasto'
                return (
                  <TableRow key={row.id}>
                    <TableCell>
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          whiteSpace: 'nowrap',
                          width: 1
                        }}
                      >
                        <Box sx={{ position: 'relative' }}>
                          <Avatar
                            sx={{
                              width: 30,
                              height: 30,
                              color: 'text.secondary',
                              bgcolor: 'background.neutral'
                            }}
                          >
                            <AccountBalance sx={{ width: 21, height: 21 }} />
                          </Avatar>
                          <Box
                            sx={{
                              right: 0,
                              bottom: 0,
                              width: 12,
                              height: 12,
                              display: 'flex',
                              borderRadius: '50%',
                              position: 'absolute',
                              alignItems: 'center',
                              color: 'common.white',
                              bgcolor: 'error.main',
                              justifyContent: 'center',
                              ...(isIncome && {
                                bgcolor: 'success.main'
                              })
                            }}
                          >
                            {isIncome ? (
                              <SouthWest sx={{ width: 8, height: 8 }} />
                            ) : (
                              <NorthEast sx={{ width: 8, height: 8 }} />
                            )}
                          </Box>
                        </Box>
                        <Stack
                          sx={{ ml: 2, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', width: 1 }}
                        >
                          <Typography
                            variant="caption"
                            noWrap
                            sx={{
                              overflow: 'hidden',
                              textOverflow: 'ellipsis',
                              whiteSpace: 'nowrap',
                              width: 1
                            }}
                          >
                            {row?.key}
                          </Typography>
                        </Stack>
                      </Box>
                    </TableCell>

                    <TableCell>
                      <Typography variant="subtitle2" fontWeight="bold" color={isIncome ? 'success.main' : 'error'}>
                        {isIncome ? `+ ${fCurrency(row.amount)}` : `- ${fCurrency(row.amount)}`}
                      </Typography>
                    </TableCell>

                    <TableCell>{row.concept}</TableCell>

                    <TableCell>
                      <Label
                        variant={isLight ? 'ghost' : 'filled'}
                        color={row?.status.color || 'error'}
                        sx={{ textTransform: 'uppercase' }}
                      >
                        {row?.status?.name}
                      </Label>
                    </TableCell>

                    <TableCell>
                      <Typography variant="subtitle2">{format(new Date(row.date), 'dd MMM yyyy')}</Typography>
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        {format(new Date(row.date), 'p')}
                      </Typography>
                    </TableCell>
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Scrollbar>

      <Divider />

      <Box sx={{ p: 2, textAlign: 'right' }}>
        <Button size="small" color="inherit" endIcon={<ArrowForwardIos fontSize="8px" />}>
          Ver Todos
        </Button>
      </Box>
    </Card>
  )
}

export default CommerceSpeiMovements

function AvatarIcon({ icon }) {
  return (
    <Avatar
      sx={{
        width: 48,
        height: 48,
        color: 'text.secondary',
        bgcolor: 'background.neutral'
      }}
    >
      <Icon style={{ fontSize: '24px' }}>{icon}</Icon>
    </Avatar>
  )
}

function renderAvatar(category, avatar) {
  if (category === 'Books') {
    return <AvatarIcon icon={'eva:book-fill'} />
  }
  if (category === 'Beauty & Health') {
    return <AvatarIcon icon={'eva:heart-fill'} />
  }
  return avatar ? (
    <Avatar alt={category} src={avatar} sx={{ width: 48, height: 48, boxShadow: theme => theme.customShadows.z8 }} />
  ) : null
}
