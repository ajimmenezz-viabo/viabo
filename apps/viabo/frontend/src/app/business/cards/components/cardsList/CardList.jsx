import { Box, Pagination, Stack } from '@mui/material'
import { motion } from 'framer-motion'
import { Label } from '@/shared/components/form'
import { getColorCardStatusById } from '@/app/shared/services'
import { Scrollbar } from '@/shared/components/scroll'
import EmptyList from '@/shared/components/notifications/EmptyList'
import { CommerceViaboCard } from '@/app/business/cards/components/cardsList/CommerceViaboCard'
import { useEffect, useMemo, useState } from 'react'
import { usePagination } from '@/shared/hooks'
import { searchByTerm } from '@/app/shared/utils'
import { useCommerceDetailsCard } from '@/app/business/cards/store'

export function CardList({ commerceCards, searchTerm = '' }) {
  const setCommerceCard = useCommerceDetailsCard(state => state.setCard)
  const commerceCardSelectedId = useCommerceDetailsCard(state => state.card?.id)

  const [page, setPage] = useState(1)
  const [selectedStatus, setSelectedStatus] = useState('')
  const [searchResult, setSearchResult] = useState([])
  const [searchResultStatus, setSearchResultStatus] = useState([])

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

  const PER_PAGE = 4
  const source = searchTerm ? searchResult : selectedStatus ? searchResultStatus : commerceCards
  const length = source?.length || 0
  const count = Math.ceil(length / PER_PAGE)
  const _DATA = usePagination(source || [], PER_PAGE)

  const handleChange = (e, p) => {
    setPage(p)
    _DATA.jump(p)
  }

  const search = (list, term) => list?.filter(card => card?.cardNumber?.toString().trim().includes(term.trim())) || []

  useEffect(() => {
    if (searchTerm.trim() !== '' && searchResultStatus && selectedStatus) {
      const filteredModels = search(searchResultStatus, searchTerm)
      setSearchResult(filteredModels)
    } else if (searchTerm && commerceCards && !selectedStatus) {
      const filteredModels = search(commerceCards, searchTerm)
      setSearchResult(filteredModels)
    }
  }, [searchTerm, commerceCards, selectedStatus, searchResultStatus])

  useEffect(() => {
    if (commerceCards && commerceCardSelectedId) {
      const commerceUpdate = commerceCards?.find(card => card?.id === commerceCardSelectedId)
      if (commerceUpdate) {
        setCommerceCard(commerceUpdate)
      }
    }
  }, [commerceCards, commerceCardSelectedId])

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
    <>
      <Box display="flex" mt={3} flexDirection={'column'} alignItems={{ xs: 'center' }}>
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
  )
}
