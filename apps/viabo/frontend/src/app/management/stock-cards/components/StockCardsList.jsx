import { useEffect, useState } from 'react'
import { Box, InputAdornment, Pagination, TextField } from '@mui/material'
import { Search } from '@mui/icons-material'
import { usePagination } from '@/shared/hooks'
import { StockCard, StockCardSkeleton } from '@/app/management/stock-cards/components/stock-card'
import { EXAMPLE_CARDS } from '@/app/management/stock-cards/mock'
import { useCollapseDrawer, useResponsive } from '@theme/hooks'

export function StockCardsList() {
  const isDesktop = useResponsive('up', 'xl')
  const { isCollapse } = useCollapseDrawer()
  const [page, setPage] = useState(1)
  const [searchTerm, setSearchTerm] = useState('')
  const [searchResult, setSearchResult] = useState([])

  const cardList = EXAMPLE_CARDS ?? []
  const loadingCards = false

  const PER_PAGE = isDesktop ? 12 : 9
  const source = searchTerm ? searchResult : cardList
  const length = source?.length || 0
  const count = Math.ceil(length / PER_PAGE)
  const _DATA = usePagination(source || [], PER_PAGE)

  const handleChange = (e, p) => {
    setPage(p)
    _DATA.jump(p)
  }

  const searchModels = (cards, searchTerm) =>
    cards.filter(model =>
      Object.keys(model).some(key => model[key].toString().toLowerCase().includes(searchTerm.toLowerCase()))
    )

  useEffect(() => {
    if (searchTerm) {
      const filteredModels = searchModels(cardList, searchTerm)
      setSearchResult(filteredModels)
    } else {
      setSearchResult([])
    }
  }, [searchTerm, cardList])

  return (
    <>
      <Box display="flex" mb={3} flexDirection={{ xs: 'column', sm: 'row' }} alignItems={{ xs: 'center' }}>
        <Box>
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
        </Box>
        <Box sx={{ flex: '1 1 auto', mb: { xs: 3 } }} />
        <Pagination count={count} page={page} onChange={handleChange} />
      </Box>

      <Box
        mb={3}
        sx={{
          display: 'grid',
          gap: 3,
          gridTemplateColumns: {
            xs: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(2, 1fr)',
            lg: isCollapse ? 'repeat(3, 1fr)' : 'repeat(2, 1fr)',
            xl: 'repeat(4, 1fr)'
          }
        }}
      >
        {(loadingCards ? [...Array(PER_PAGE)] : _DATA.currentData() || []).map((card, index) =>
          card ? <StockCard card={card} key={index} /> : <StockCardSkeleton key={index} />
        )}
      </Box>
    </>
  )
}
