import React, { useEffect, useState } from 'react'
import { Box, InputAdornment, Pagination, Stack, TextField } from '@mui/material'
import { motion } from 'framer-motion'
import { Scrollbar } from '@/shared/components/scroll'
import CommerceCard from '@/app/management/commerces/components/CommerceCard'
import { usePagination } from '@/shared/hooks'
import { Search } from '@mui/icons-material'

export function CommerceList({ minHeight }) {
  const data = [
    {
      name: 'Usuario 1',
      fiscalName: 'Comercio 1',
      registerDate: '2023/03/23',
      status: 'En Proceso'
    },
    {
      name: 'Usuario 2',
      fiscalName: 'Comercio 2',
      registerDate: '2023/03/23',
      status: 'En Proceso'
    },
    {
      name: 'Usuario 3',
      fiscalName: 'Comercio 3',
      registerDate: '2023/03/23',
      status: 'En Proceso'
    },
    {
      name: 'Usuario 4',
      fiscalName: 'Comercio 4',
      registerDate: '2023/03/23',
      status: 'Registro'
    },
    {
      name: 'Usuario 5',
      fiscalName: 'Comercio 5',
      registerDate: '2023/03/23',
      status: 'Registro'
    }
  ]

  const [page, setPage] = useState(1)
  const [searchTerm, setSearchTerm] = useState('')
  const [searchResult, setSearchResult] = useState([])

  const PER_PAGE = 3
  const source = searchTerm ? searchResult : data
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
      const filteredModels = search(data, searchTerm)
      setSearchResult(filteredModels)
    } else {
      setSearchResult([])
    }
  }, [searchTerm, data])

  return (
    <Stack sx={{ pr: { sm: 2 } }}>
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
            {_DATA.currentData().map((commerce, index) => (
              <motion.div key={commerce.name} whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.8 }}>
                <CommerceCard commerce={commerce} selected={index === 0} />
              </motion.div>
            ))}
          </Stack>
        </Scrollbar>
      </Box>
    </Stack>
  )
}
