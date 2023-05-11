import { useEffect, useMemo, useState } from 'react'
import { usePagination } from '@/shared/hooks'
import { Box, InputAdornment, Pagination, Stack, TextField } from '@mui/material'
import { ErrorRequestPage } from '@/shared/components/notifications'
import { RequestLoadingComponent } from '@/shared/components/loadings'
import { motion } from 'framer-motion'
import { Label } from '@/shared/components/form'
import { Search } from '@mui/icons-material'
import { Scrollbar } from '@/shared/components/scroll'
import EmptyList from '@/shared/components/notifications/EmptyList'
import { useFindCommerceCards } from '@/app/business/cards/hooks'
import { searchByTerm } from '@/app/shared/utils'
import { useCommerceDetailsCard } from '@/app/business/cards/store'
import { getColorCardStatusById } from '@/app/shared/services'
import { CommerceViaboCard } from '@/app/business/cards/components/CommerceViaboCard'
import { useCollapseDrawer } from '@theme/hooks'

export function CommerceCardsList() {
  const { isCollapse } = useCollapseDrawer()
  const {
    data: commerceCards,
    isLoading: loadingCommerces,
    isError,
    error,
    refetch,
    isSuccess
  } = useFindCommerceCards()
  const setCommerceCard = useCommerceDetailsCard(state => state.setCard)
  const commerceCardSelected = useCommerceDetailsCard(state => state.card)

  const statusList = useMemo(() => {
    const statusList = commerceCards?.map(card => card?.status) || []
    const uniqueStatus = {}
    const filterStatusList = []
    statusList.forEach(status => {
      if (status && !uniqueStatus[status.id]) {
        uniqueStatus[status.id] = true
        filterStatusList.push(status)
      }
    })

    return filterStatusList
  }, [commerceCards])

  const [page, setPage] = useState(1)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedStatus, setSelectedStatus] = useState('')
  const [searchResult, setSearchResult] = useState([])
  const [searchResultStatus, setSearchResultStatus] = useState([])

  const PER_PAGE = 4
  const source = searchTerm ? searchResult : selectedStatus ? searchResultStatus : commerceCards
  const length = source?.length || 0
  const count = Math.ceil(length / PER_PAGE)
  const _DATA = usePagination(source || [], PER_PAGE)

  const handleChange = (e, p) => {
    setPage(p)
    _DATA.jump(p)
  }

  useEffect(() => {
    if (searchTerm.trim() !== '' && searchResultStatus && selectedStatus) {
      const filteredModels = searchByTerm(searchResultStatus, searchTerm)
      setSearchResult(filteredModels)
    } else if (searchTerm && commerceCards && !selectedStatus) {
      const filteredModels = searchByTerm(commerceCards, searchTerm)
      setSearchResult(filteredModels)
    }
  }, [searchTerm, commerceCards, selectedStatus, searchResultStatus])

  useEffect(() => {
    if (commerceCards && commerceCardSelected) {
      const commerceUpdate = commerceCards?.find(card => card?.id === commerceCardSelected?.id)
      commerceUpdate && setCommerceCard(commerceUpdate)
    }
  }, [commerceCards, commerceCardSelected])

  const handleStatus = status => {
    let searchStatus = ''
    if (status === selectedStatus) {
      setSelectedStatus('')
    } else {
      setSelectedStatus(status)
      searchStatus = status?.name || ''
    }
    const filteredModels = searchByTerm(commerceCards, searchStatus)
    setSearchResultStatus(filteredModels)
  }
  return (
    <Stack sx={{ pr: { sm: 2 }, width: 400, minWidth: 400 }}>
      {isError && !commerceCards && !loadingCommerces && (
        <ErrorRequestPage errorMessage={error} handleButton={refetch} />
      )}
      {loadingCommerces && <RequestLoadingComponent />}
      {commerceCards?.length > 0 && (
        <>
          <Box display="flex">
            {statusList?.map(status => {
              const selected = selectedStatus?.id === status?.id
              return (
                <motion.div
                  key={status?.id}
                  onClick={() => handleStatus(status)}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.8 }}
                >
                  <Label
                    variant={selected ? 'ghost' : 'filled'}
                    color={getColorCardStatusById(status?.id)}
                    sx={{
                      textTransform: 'uppercase',
                      marginRight: 1,
                      marginBottom: 2,
                      cursor: 'pointer',
                      border: selected ? 3 : 0,
                      borderColor: selected ? theme => theme.palette.primary.main : 'inherit'
                    }}
                  >
                    {status?.name}
                  </Label>
                </motion.div>
              )
            })}
          </Box>
          <Box display="flex" mb={3} flexDirection={'column'} alignItems={{ xs: 'center' }}>
            <TextField
              fullWidth
              size="small"
              placeholder="Buscar ..."
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Box sx={{ color: 'text.disabled' }}>
                      <Search sx={{ marginTop: 1 }} />
                    </Box>
                  </InputAdornment>
                )
              }}
            />

            <Box sx={{ flex: '1 1 auto', mb: { xs: 3 } }} />
            <Pagination count={count} page={page} onChange={handleChange} />
          </Box>
          <Scrollbar>
            <Stack spacing={2} sx={{ p: 2, cursor: 'pointer' }}>
              {_DATA?.currentData()?.length === 0 && <EmptyList pt={2.5} message={'Sin resultados '} />}
              {_DATA?.currentData()?.map((card, index) => (
                <motion.div
                  onClick={e => {
                    setCommerceCard(card)
                  }}
                  key={index}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.8 }}
                >
                  <CommerceViaboCard card={card} />
                </motion.div>
              ))}
            </Stack>
          </Scrollbar>
        </>
      )}
      {commerceCards && commerceCards?.length === 0 && (
        <EmptyList pt={2.5} message={'No hay tarjetas asignadas a este comercio'} />
      )}
    </Stack>
  )
}
