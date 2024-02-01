import { useMemo } from 'react'

import PropTypes from 'prop-types'

import { ArrowBackIos } from '@mui/icons-material'
import { LoadingButton } from '@mui/lab'
import {
  Box,
  Button,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  styled
} from '@mui/material'

import { Scrollbar } from '@/shared/components/scroll'
import { fCurrency } from '@/shared/utils'

const RowResultStyle = styled(TableRow)(({ theme }) => ({
  '& td': {
    paddingTop: theme.spacing(0.5),
    paddingBottom: theme.spacing(0.5)
  }
}))

const SpeiOutResume = ({ data, onBack, setTransactionLoading, transactionLoading, onClose }) => {
  const transactions = useMemo(() => data?.transactions || [], [data])
  const total = useMemo(() => (parseFloat(data?.balance) - data?.currentBalance).toFixed(2) || 0, [data])

  const handleSubmit = () => {
    const { cardOriginId, transactions, isGlobal, concept } = data

    setTransactionLoading(true)
  }

  const isSending = false

  const isLoading = isSending || transactionLoading

  return (
    <>
      <Scrollbar>
        <TableContainer sx={{ minWidth: 200 }}>
          <Table>
            <TableHead
              sx={{
                borderBottom: theme => `solid 1px ${theme.palette.divider}`
              }}
            >
              <TableRow>
                <TableCell width={40}>#</TableCell>
                <TableCell align="left">Movimiento</TableCell>
                <TableCell align="right">Monto</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {transactions?.map((row, index) => (
                <TableRow
                  key={index}
                  sx={{
                    borderBottom: theme => `solid 1px ${theme.palette.divider}`
                  }}
                >
                  <TableCell>{index + 1}</TableCell>
                  <TableCell align="left">
                    <Box sx={{ maxWidth: 200 }}>
                      <Typography variant="subtitle2">{row?.card?.cardUserNumber || 'Cuenta Global'}</Typography>
                      <Typography variant="body2" sx={{ color: 'text.secondary' }} noWrap>
                        {row?.concept}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell align="right">{fCurrency(row?.amount)}</TableCell>
                </TableRow>
              ))}

              <RowResultStyle>
                <TableCell colSpan={1} />
                <TableCell align="right">
                  <Stack flexDirection={'row'} gap={1} alignItems={'center'} justifyContent={'flex-end'}>
                    <Typography>Saldo Disponible</Typography>
                  </Stack>
                </TableCell>
                <TableCell align="right" width={120}>
                  <Typography>{fCurrency(data?.balance)}</Typography>
                </TableCell>
              </RowResultStyle>

              <RowResultStyle>
                <TableCell colSpan={1} />
                <TableCell align="right">
                  <Typography variant="h6">Total a dispersar</Typography>
                </TableCell>
                <TableCell align="right" width={120}>
                  <Typography variant="h6" sx={{ color: 'error.main' }}>
                    {fCurrency(-data?.currentBalance)}
                  </Typography>
                </TableCell>
              </RowResultStyle>

              <RowResultStyle>
                <TableCell colSpan={1} />
                <TableCell align="right">
                  <Typography>Total después de movimiento</Typography>
                </TableCell>
                <TableCell align="right" width={140}>
                  <Typography>{fCurrency(total)}</Typography>
                </TableCell>
              </RowResultStyle>
            </TableBody>
          </Table>
        </TableContainer>
      </Scrollbar>
      <Stack sx={{ p: 3 }} spacing={3}>
        <LoadingButton
          size={'large'}
          onClick={handleSubmit}
          loading={isLoading}
          variant="contained"
          color="primary"
          fullWidth
          type="submit"
          sx={{ fontWeight: 'bold' }}
        >
          Realizar
        </LoadingButton>

        {!isLoading && (
          <Button onClick={onBack} variant="outlined" color="inherit" fullWidth startIcon={<ArrowBackIos />}>
            Regresar
          </Button>
        )}
      </Stack>
    </>
  )
}

SpeiOutResume.propTypes = {
  data: PropTypes.shape({
    balance: PropTypes.any,
    cardOriginId: PropTypes.any,
    concept: PropTypes.any,
    currentBalance: PropTypes.any,
    isGlobal: PropTypes.any,
    transactions: PropTypes.array
  }),
  onBack: PropTypes.any,
  onClose: PropTypes.any,
  setTransactionLoading: PropTypes.func,
  transactionLoading: PropTypes.any
}

export default SpeiOutResume