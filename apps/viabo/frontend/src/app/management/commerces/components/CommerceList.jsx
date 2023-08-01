import { useEffect, useMemo, useState } from 'react'

import { Search } from '@mui/icons-material'
import { Box, InputAdornment, Pagination, Stack, TextField } from '@mui/material'
import { motion } from 'framer-motion'
import { shallow } from 'zustand/shallow'

import CommerceCard from '@/app/management/commerces/components/CommerceCard'
import { useFindCommerceList } from '@/app/management/commerces/hooks'
import { getColorStatusCommerceById } from '@/app/management/commerces/services'
import { useCommerce } from '@/app/management/commerces/store'
import { searchByTerm } from '@/app/shared/utils'
import { Label } from '@/shared/components/form'
import { RequestLoadingComponent } from '@/shared/components/loadings'
import { ErrorRequestPage } from '@/shared/components/notifications'
import EmptyList from '@/shared/components/notifications/EmptyList'
import { usePagination } from '@/shared/hooks'

export function CommerceList() {
  const { data: commerces, isLoading: loadingCommerces, isError, error, refetch, isSuccess } = useFindCommerceList()
  const setCommerce = useCommerce(state => state.setCommerce)
  const { commerce: commerceSelected } = useCommerce(state => state, shallow)

  const statusList = useMemo(() => {
    const statusList = commerces?.map(commerce => commerce?.status) || []
    const uniqueStatus = {}
    const filterStatusList = []
    statusList.forEach(status => {
      if (status && !uniqueStatus[status.id]) {
        uniqueStatus[status.id] = true
        filterStatusList.push(status)
      }
    })

    return filterStatusList
  }, [commerces])

  const [page, setPage] = useState(1)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedStatus, setSelectedStatus] = useState('')
  const [searchResult, setSearchResult] = useState([])
  const [searchResultStatus, setSearchResultStatus] = useState([])

  const PER_PAGE = 4
  const source = searchTerm ? searchResult : selectedStatus ? searchResultStatus : commerces
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
    } else if (searchTerm && commerces && !selectedStatus) {
      const filteredModels = searchByTerm(commerces, searchTerm)
      setSearchResult(filteredModels)
    }
  }, [searchTerm, commerces, selectedStatus, searchResultStatus])

  useEffect(() => {
    if (commerces && commerceSelected) {
      const commerceUpdate = commerces?.find(commerce => commerce?.id === commerceSelected?.id)
      commerceUpdate && setCommerce(commerceUpdate)
    }
  }, [commerces, commerceSelected])

  if (isError) {
    return (
      <Stack sx={{ pr: { sm: 2 } }}>
        <ErrorRequestPage errorMessage={error} handleButton={refetch} />
      </Stack>
    )
  }

  const handleStatus = status => {
    let searchStatus = ''
    if (status === selectedStatus) {
      setSelectedStatus('')
    } else {
      setSelectedStatus(status)
      searchStatus = status?.name || ''
    }
    const filteredModels = searchByTerm(commerces, searchStatus)
    setSearchResultStatus(filteredModels)
  }
  return (
    <>
      {loadingCommerces && <RequestLoadingComponent />}
      {commerces?.length > 0 && (
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
                    color={getColorStatusCommerceById(status?.id)}
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

          <Stack direction="column" spacing={2}>
            {_DATA?.currentData()?.length === 0 && <EmptyList pt={2.5} message={'Sin resultados '} />}
            {_DATA?.currentData()?.map((commerce, index) => (
              <motion.div
                onClick={() => {
                  setCommerce(commerce)
                }}
                key={index}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.8 }}
                style={{ cursor: 'pointer' }}
              >
                <CommerceCard commerce={commerce} selected={index === 0} />
              </motion.div>
            ))}
          </Stack>
        </>
      )}
      {commerces && commerces?.length === 0 && <EmptyList pt={2.5} message={'No hay comercios Registrados'} />}
    </>
  )
}
