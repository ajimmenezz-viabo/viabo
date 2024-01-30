import { useMemo, useRef, useState } from 'react'

import PropTypes from 'prop-types'

import { CalendarMonth } from '@mui/icons-material'
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  IconButton,
  Stack,
  TextField
} from '@mui/material'
import { format } from 'date-fns'
import { es } from 'date-fns/locale'
import { DateRangePicker } from 'mui-daterange-picker-orient'

import { getDateRange } from '@/shared/utils'
import { useResponsive } from '@/theme/hooks'

const AdminSpeiMovementsFilters = ({ startDate, endDate, onChangeDateRange, loading }) => {
  const initialDateRange = useMemo(() => getDateRange(), [])

  const modalRef = useRef(null)

  const isVerticalOrientation = useResponsive('down', 'md')

  const [dateOpen, setDateOpen] = useState(false)
  const [openModal, setOpenModal] = useState(dateOpen)

  const toggle = () => {
    setDateOpen(!dateOpen)
    if (!dateOpen) {
      setOpenModal(true)
    }
  }

  const startDateFormat = useMemo(
    () =>
      startDate
        ? format(startDate, 'dd MMMM yyyy', { locale: es })
        : format(new Date(), 'dd MMMM yyyy', { locale: es }),
    [startDate]
  )
  const endDateFormat = useMemo(
    () =>
      endDate ? format(endDate, 'dd MMMM yyyy', { locale: es }) : format(new Date(), 'dd MMMM yyyy', { locale: es }),
    [endDate]
  )

  const formatDate = `${startDateFormat} - ${endDateFormat}`

  return (
    <>
      <Stack py={2} px={1} flexDirection={{ lg: 'row' }} justifyContent={'space-between'} alignItems={'center'} gap={1}>
        <Stack flex={1} width={1} direction={'row'} spacing={0.5}>
          <IconButton disabled={Boolean(loading)} onClick={toggle} size="small">
            <CalendarMonth />
          </IconButton>
          <Stack flex={1}>
            <TextField
              placeholder="Fecha inicial - Fecha final"
              value={formatDate}
              fullWidth
              type="text"
              variant="outlined"
              size="small"
              disabled={Boolean(loading)}
              onClick={toggle}
              InputProps={{ readOnly: true }}
            />
          </Stack>
        </Stack>

        <Box display={'flex'} flexGrow={1} />

        <Dialog
          open={openModal}
          ref={modalRef}
          scroll={'paper'}
          aria-labelledby="scroll-dialog-title"
          aria-describedby="scroll-dialog-description"
          maxWidth="md"
        >
          <DialogTitle variant="subtitle1" fontWeight={'bolder'} sx={{ mb: 2 }} id="scroll-dialog-title">
            Confirma las fechas seleccionadas
          </DialogTitle>
          <DialogContent id="scroll-dialog-description" dividers={true}>
            <DateRangePicker
              open={dateOpen}
              onChange={onChangeDateRange}
              verticalOrientation={isVerticalOrientation}
              toggle={toggle}
              locale={es}
              definedRanges={initialDateRange}
              closeOnClickOutside={false}
              wrapperClassName="simple-date-range"
            />
          </DialogContent>
          <DialogActions>
            <Button
              variant="contained"
              color={'primary'}
              onClick={() => {
                setOpenModal(false)
                setTimeout(() => {
                  setDateOpen(false)
                }, 200)
              }}
            >
              Hecho
            </Button>
          </DialogActions>
        </Dialog>
      </Stack>
      <Divider sx={{ borderStyle: 'dashed' }} />
    </>
  )
}

AdminSpeiMovementsFilters.propTypes = {
  endDate: PropTypes.any,
  loading: PropTypes.any,
  onChangeDateRange: PropTypes.any,
  startDate: PropTypes.any
}

export default AdminSpeiMovementsFilters
