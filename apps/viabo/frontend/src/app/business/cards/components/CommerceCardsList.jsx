import { useState } from 'react'
import { Box, InputAdornment, Stack, TextField, ToggleButton, ToggleButtonGroup } from '@mui/material'
import { ErrorRequestPage } from '@/shared/components/notifications'
import { RequestLoadingComponent } from '@/shared/components/loadings'
import EmptyList from '@/shared/components/notifications/EmptyList'
import { useFindCommerceCards } from '@/app/business/cards/hooks'
import { Apps, FormatListBulleted, Search } from '@mui/icons-material'
import { CardList } from '@/app/business/cards/components/cardsList'
import { CardListTable } from '@/app/business/cards/components/cardsTable'

export function CommerceCardsList() {
  const {
    data: commerceCards,
    isLoading: loadingCommerces,
    isError,
    error,
    refetch,
    isSuccess
  } = useFindCommerceCards()

  const [searchTerm, setSearchTerm] = useState('')

  const [view, setView] = useState('1')
  const handleChange = (event, newValue) => {
    setView(newValue)
  }

  return (
    <Stack
      sx={{
        pr: { sm: 2 },
        width: { xs: view === '1' ? 300 : 350, xl: 400 },
        minWidth: { xs: view === '1' ? 300 : 350, xl: 400 }
      }}
    >
      {isError && !commerceCards && !loadingCommerces && (
        <ErrorRequestPage errorMessage={error} handleButton={refetch} />
      )}
      {loadingCommerces && <RequestLoadingComponent />}
      {commerceCards?.length > 0 && (
        <>
          <Stack flexDirection={'column'} alignItems={'flex-end'} sx={{ mt: 2 }} gap={3} justifyContent={'flex-end'}>
            <ToggleButtonGroup
              size={'small'}
              color="primary"
              value={view}
              exclusive
              onChange={handleChange}
              aria-label="Platform"
            >
              <ToggleButton value="1">
                <FormatListBulleted />
              </ToggleButton>
              <ToggleButton value="2">
                <Apps />
              </ToggleButton>
            </ToggleButtonGroup>
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
          </Stack>

          {view === '2' && <CardList commerceCards={commerceCards} searchTerm={searchTerm} />}
          {view === '1' && <CardListTable cards={commerceCards} searchTerm={searchTerm} />}
        </>
      )}
      {commerceCards && commerceCards?.length === 0 && (
        <EmptyList pt={2.5} message={'No hay tarjetas asignadas a este comercio'} />
      )}
    </Stack>
  )
}
