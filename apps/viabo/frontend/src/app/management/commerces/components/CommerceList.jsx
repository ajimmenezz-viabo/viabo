import React, { useEffect, useMemo, useState } from 'react'
import { Box, InputAdornment, Pagination, Stack, TextField } from '@mui/material'
import { motion } from 'framer-motion'
import { Scrollbar } from '@/shared/components/scroll'
import CommerceCard from '@/app/management/commerces/components/CommerceCard'
import { usePagination } from '@/shared/hooks'
import { Search } from '@mui/icons-material'
import { useFindCommerceList } from '@/app/management/commerces/hooks/useFindCommerceList'
import { RequestLoadingComponent } from '@/shared/components/loadings'
import { ErrorRequestPage } from '@/shared/components/notifications'
import { useCommerce } from '@/app/management/commerces/store'
import EmptyList from '@/shared/components/notifications/EmptyList'
import { shallow } from 'zustand/shallow'
import { Label } from '@/shared/components/form'
import { getColorStatusCommerceById } from '@/app/management/commerces/services'

export function CommerceList({ minHeight }) {
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

  const search = (list, searchTerm) =>
    list.filter(model => {
      const searchInObject = obj => {
        if (!obj || typeof obj !== 'object') {
          return false
        }

        return Object.keys(obj).some(key => {
          if (typeof obj[key] === 'object') {
            return searchInObject(obj[key])
          } else {
            return obj[key] && obj[key].toString().toLowerCase().includes(searchTerm.toLowerCase())
          }
        })
      }

      return searchInObject(model)
    })

  useEffect(() => {
    if (searchTerm.trim() !== '' && searchResultStatus && selectedStatus) {
      const filteredModels = search(searchResultStatus, searchTerm)
      setSearchResult(filteredModels)
    } else if (searchTerm && commerces && !selectedStatus) {
      const filteredModels = search(commerces, searchTerm)
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
    const filteredModels = search(commerces, searchStatus)
    setSearchResultStatus(filteredModels)
  }
  return (
    <Stack sx={{ pr: { sm: 2 } }}>
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
          <Box sx={{ maxHeight: 1, minHeight: '100%', overflow: 'auto' }}>
            <Scrollbar
              sx={
                {
                  // height: 1,
                  // '& .simplebar-content': { height: 1, display: 'flex', flexDirection: 'column' }
                }
              }
            >
              <Stack direction="column" spacing={2} sx={{ p: 2, cursor: 'pointer' }}>
                {_DATA?.currentData()?.length === 0 && <EmptyList pt={2.5} message={'Sin resultados '} />}
                {_DATA?.currentData()?.map((commerce, index) => (
                  <motion.div
                    onClick={() => {
                      setCommerce(commerce)
                    }}
                    key={index}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.8 }}
                  >
                    <CommerceCard commerce={commerce} selected={index === 0} />
                  </motion.div>
                ))}
              </Stack>
            </Scrollbar>
          </Box>
        </>
      )}
      {commerces && commerces?.length === 0 && <EmptyList pt={2.5} message={'No hay comercios Registrados'} />}
    </Stack>
  )
}
