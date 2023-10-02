import { useRef } from 'react'

import { CompareArrowsRounded } from '@mui/icons-material'
import {
  Box,
  Grid,
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
import { useQueryClient } from '@tanstack/react-query'
import { toast } from 'react-toastify'

import { ConciliateTerminalMovementsAdapter, TERMINALS_KEYS } from '../../../adapters'
import { useConciliateTerminalMovements, useFindMovementsToConciliateTerminal } from '../../../hooks'
import { useTerminalDetails } from '../../../store'

import { MaterialDataTable, SearchAction } from '@/shared/components/dataTables'
import { Modal } from '@/shared/components/modals'
import { Scrollbar } from '@/shared/components/scroll'
import { fCurrency } from '@/shared/utils'

const RowResultStyle = styled(TableRow)(({ theme }) => ({
  '& td': {
    paddingTop: theme.spacing(0.5),
    paddingBottom: theme.spacing(0.5),
    backgroundColor: theme.palette.background.neutral
  }
}))

const ConciliateTerminalsMovements = () => {
  const setOpenConciliate = useTerminalDetails(state => state.setOpenConciliate)
  const openConciliate = useTerminalDetails(state => state.openConciliate)
  const setConciliateMovements = useTerminalDetails(state => state.setConciliateMovements)
  const { movements: terminalMovements, total, date } = useTerminalDetails(state => state.conciliateInfo)
  const terminal = useTerminalDetails(state => state.terminal)

  const movementsRef = useRef(null)

  const {
    data: movements,
    error,
    isError,
    isFetching,
    isLoading: isLoadingMovements
  } = useFindMovementsToConciliateTerminal(terminal?.terminalId, date, { enabled: !!(terminal && date) })

  const { mutate, isLoading } = useConciliateTerminalMovements()

  const client = useQueryClient()

  const handleClose = () => {
    setOpenConciliate(false)
    setConciliateMovements(null)
    client.removeQueries([TERMINALS_KEYS.CONCILIATE_MOVEMENTS, terminal?.terminalId])
  }

  const handleSubmit = () => {
    const selectedCardMovements = movementsRef.current?.getSelectedRowModel().flatRows
    if (selectedCardMovements?.length > 0) {
      const data = ConciliateTerminalMovementsAdapter(terminal, terminalMovements, selectedCardMovements[0]?.original)
      mutate(data, {
        onSuccess: () => {
          handleClose()
        },
        onError: () => {}
      })
    } else {
      toast.warn('Debe seleccionar un movimiento de la tarjeta para conciliar los movimientos de la terminal')
    }
  }

  const columns = [
    {
      id: 'card',
      header: `Movimientos Tarjeta Asociada`,
      columns: [
        {
          accessorKey: 'description',
          header: 'Movimiento',
          size: 100
        },
        {
          accessorKey: 'date',
          header: 'Fecha',
          size: 130
        },
        {
          accessorKey: 'amountFormat',
          header: 'Monto',
          size: 100
        }
      ]
    }
  ]

  return (
    <Modal
      onClose={handleClose}
      onSuccess={handleSubmit}
      isSubmitting={isLoading}
      fullWidth
      scrollType="body"
      title={`Conciliar Movimientos ${terminal?.name}`}
      textButtonSuccess="Conciliar"
      maxWidth="md"
      open={openConciliate}
    >
      <Stack pt={3}>
        <Grid container spacing={{ xs: 2 }}>
          <Grid item xs={12} md={5}>
            <Scrollbar>
              <TableContainer sx={{ minWidth: 200 }}>
                <Table size="small">
                  <TableHead
                    sx={{
                      borderBottom: theme => `solid 1px ${theme.palette.divider}`
                    }}
                  >
                    <TableRow>
                      <TableCell align="center" colSpan={3}>
                        Movimientos Terminal
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell width={40}>#</TableCell>
                      <TableCell align="left">Descripción</TableCell>
                      <TableCell align="right">Monto</TableCell>
                    </TableRow>
                  </TableHead>

                  <TableBody>
                    {terminalMovements?.map((row, index) => (
                      <TableRow
                        key={index}
                        sx={{
                          borderBottom: theme => `solid 1px ${theme.palette.divider}`
                        }}
                      >
                        <TableCell>{index + 1}</TableCell>
                        <TableCell align="left">
                          <Box sx={{ maxWidth: 180 }}>
                            <Typography variant="subtitle2">{row?.description}</Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }} noWrap>
                              {row?.transactionDate?.fullDate}
                            </Typography>
                          </Box>
                        </TableCell>
                        <TableCell align="right">{fCurrency(row?.amount)}</TableCell>
                      </TableRow>
                    ))}

                    <RowResultStyle>
                      <TableCell colSpan={1} />
                      <TableCell align="right">
                        <Typography variant="h6">Total</Typography>
                      </TableCell>
                      <TableCell align="right" width={140}>
                        <Typography variant="h6">{fCurrency(total)}</Typography>
                      </TableCell>
                    </RowResultStyle>
                  </TableBody>
                </Table>
              </TableContainer>
            </Scrollbar>
          </Grid>

          <Grid item xs={12} md={1} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Box display="flex" alignItems="center" justifyContent="center">
              <CompareArrowsRounded fontSize="large" color="primary" />
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <MaterialDataTable
              enablePinning
              enableStickyHeader
              enableRowVirtualization
              enableFacetedValues
              enableRowSelection
              enableMultiRowSelection={false}
              positionActionsColumn="last"
              enableDensityToggle={false}
              columns={columns || []}
              data={movements?.movements || []}
              isError={isError}
              textError={error}
              tableInstanceRef={movementsRef}
              initialState={{
                density: 'compact',
                sorting: [
                  {
                    id: 'date',
                    desc: true
                  }
                ]
              }}
              state={{
                isLoading: isLoadingMovements,
                showAlertBanner: isError,
                showProgressBars: isFetching
              }}
              muiTablePaperProps={{
                elevation: 0,
                sx: theme => ({
                  borderRadius: 0,
                  backgroundColor: theme.palette.background.neutral
                })
              }}
              muiBottomToolbarProps={{
                sx: theme => ({
                  backgroundColor: theme.palette.background.neutral
                })
              }}
              muiTopToolbarProps={{
                sx: theme => ({
                  backgroundColor: theme.palette.background.neutral
                })
              }}
              displayColumnDefOptions={{
                'mrt-row-select': {
                  size: 12,
                  header: ''
                }
              }}
              renderToolbarInternalActions={({ table }) => (
                <Box>
                  <SearchAction table={table} />
                </Box>
              )}
              muiTableContainerProps={{ sx: { maxHeight: 'md' } }}
            />
          </Grid>
        </Grid>
      </Stack>
    </Modal>
  )
}

export default ConciliateTerminalsMovements
