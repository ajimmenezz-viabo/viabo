import React, { useEffect, useState } from 'react'
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

export function CommerceList({ minHeight }) {
  const { data: commerces, isLoading: loadingCommerces, isError, error, refetch, isSuccess } = useFindCommerceList()
  const setCommerce = useCommerce(state => state.setCommerce)
  const { commerce: commerceSelected } = useCommerce(state => state, shallow)

  const [page, setPage] = useState(1)
  const [searchTerm, setSearchTerm] = useState('')
  const [searchResult, setSearchResult] = useState([])

  const PER_PAGE = 4
  const source = searchTerm ? searchResult : commerces
  const length = source?.length || 0
  const count = Math.ceil(length / PER_PAGE)
  const _DATA = usePagination(source || [], PER_PAGE)

  const handleChange = (e, p) => {
    setPage(p)
    _DATA.jump(p)
  }

  const search = (list, searchTerm) =>
    list.filter(model =>
      Object.keys(model).some(key => model[key].toString().toLowerCase().includes(searchTerm.toLowerCase()))
    )

  useEffect(() => {
    if (searchTerm) {
      const filteredModels = search(commerces, searchTerm)
      setSearchResult(filteredModels)
    } else {
      setSearchResult([])
    }
  }, [searchTerm, commerces])

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

  return (
    <Stack sx={{ pr: { sm: 2 } }}>
      {loadingCommerces && <RequestLoadingComponent />}
      {commerces?.length > 0 && (
        <>
          <Box display="flex" my={3} flexDirection={'column'} alignItems={{ xs: 'center' }}>
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
