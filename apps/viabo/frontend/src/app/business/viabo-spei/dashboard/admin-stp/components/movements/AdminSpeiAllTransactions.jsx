import { useMemo, useState } from 'react'

import { Search } from '@mui/icons-material'
import {
  Box,
  ClickAwayListener,
  Divider,
  InputAdornment,
  List,
  ListSubheader,
  Pagination,
  Stack,
  Typography
} from '@mui/material'
import { sub } from 'date-fns'
import { AnimatePresence, m } from 'framer-motion'

import { AdminSpeiMovementItem } from './AdminSpeiMovementItem'

import { useAdminDashboardSpeiStore } from '../../store'

import { searchByTerm } from '@/app/shared/utils'
import { varFade } from '@/shared/components/animate'
import { InputDateRange, InputStyle } from '@/shared/components/form'
import { SearchNotFound } from '@/shared/components/notifications'
import { usePagination } from '@/shared/hooks'

export const AdminSpeiMovementsDetails = () => {
  const queryMovements = useAdminDashboardSpeiStore(state => state.queryMovements)

  const movements = queryMovements?.data?.original || []

  const [page, setPage] = useState(1)
  const [searchTerm, setSearchTerm] = useState('')
  const [isSearchFocused, setSearchFocused] = useState(false)
  const [searchResult, setSearchResult] = useState([])

  const PER_PAGE = 10
  const source = useMemo(
    () => (searchTerm !== '' ? searchResult : movements) || [],
    [searchTerm, movements, searchResult]
  )
  const _DATA = usePagination(source || [], PER_PAGE)
  const length = source?.length || 0
  const count = Math.ceil(length / PER_PAGE)
  const paginatedMovements = _DATA.currentData()

  const currentDate = new Date()
  const filterDate = null
  const startDate = useMemo(
    () => (filterDate?.startDate ? new Date(filterDate?.startDate) : sub(currentDate, { days: 30 })),
    [filterDate?.startDate]
  )
  const endDate = useMemo(
    () => (filterDate?.endDate ? new Date(filterDate?.endDate) : currentDate),
    [filterDate?.endDate]
  )

  const handleChange = (e, p) => {
    setPage(p)
    _DATA.jump(p)
  }

  const handleClickAwaySearch = () => {
    setSearchFocused(false)
  }

  const handleChangeSearch = async event => {
    const { value } = event.target
    setSearchTerm(value)
    if (value) {
      const filterCards = searchByTerm(movements, searchTerm)
      setSearchResult(filterCards)
    } else {
      setSearchResult(movements)
    }
  }

  const handleSearchFocus = () => {
    setSearchFocused(true)
  }

  const displayResults = searchTerm && isSearchFocused

  return (
    <Stack gap={3}>
      <Box display="flex" flexDirection={{ xs: 'column', sm: 'row' }}>
        <Box>
          <ClickAwayListener onClickAway={handleClickAwaySearch}>
            <InputStyle
              fullWidth
              size="small"
              value={searchTerm}
              onFocus={handleSearchFocus}
              onChange={handleChangeSearch}
              placeholder="Buscar Movimientos..."
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Search sx={{ color: 'text.disabled', width: 20, height: 20 }} />
                  </InputAdornment>
                )
              }}
            />
          </ClickAwayListener>
        </Box>
        <Box sx={{ flex: '1 1 auto', mb: { xs: 3 } }} />
        <InputDateRange startDate={startDate} endDate={endDate} />
      </Box>
      <Stack>
        <Divider sx={{ borderStyle: 'dashed' }} />
        <List>
          <AnimatePresence>
            {paginatedMovements.map((movement, index) => (
              <div key={index}>
                {(index === 0 || paginatedMovements[index - 1]?.date?.groupBy !== movement.date?.groupBy) && (
                  <ul>
                    <ListSubheader
                      component={m.div}
                      {...varFade().inRight}
                      sx={{ backgroundColor: 'transparent', pt: 2 }}
                    >
                      <Typography variant="subtitle1" color="text.secondary">
                        {movement?.date?.groupBy}
                      </Typography>
                    </ListSubheader>
                  </ul>
                )}
                <AdminSpeiMovementItem
                  component={m.div}
                  {...varFade().inRight}
                  key={movement?.id}
                  movement={movement}
                />
              </div>
            ))}
          </AnimatePresence>
        </List>
        {displayResults && paginatedMovements?.length === 0 && movements?.length > 0 && (
          <SearchNotFound
            widthImage="15%"
            sx={{ p: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}
            searchQuery={searchTerm}
          />
        )}
      </Stack>

      <Stack alignItems={'center'} justifyContent={'center'}>
        <Pagination count={count} page={page} onChange={handleChange} variant="outlined" shape="rounded" />
      </Stack>
    </Stack>
  )
}
